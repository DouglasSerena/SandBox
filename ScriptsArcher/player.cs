using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
    [Header("Character Attributes:")]
    public float MOVIMENT_BASE_SPEED = 1.0f;
    public float CROSSHEIR_DISTANCE = 1.0f;
    public float AIMING_BASE_PENALTY = 0.5f;
    public float SHOOTING_RECOIL_TIME = 1.0f;
    public float ARROW_BASE_SPEED = 1.0f;  
    
    [Space]
    [Header("Character Statistics:")]
    public Vector2 movimentoDirection;
    public float movimentoSpeed;
    public bool endOfAiming;
    public bool isAiming;
    public bool LookPosition;
    public bool useController;    
    public float shootingRecoil = 0.0f;

    [Space]
    [Header("Arrow:")]
    public float SpeedArrow = 2f;


    [Space]
    [Header("References:")]
    public Rigidbody2D rb;
    public Animator animator;
    public GameObject CrossHeir;
 
    [Space]
    [Header("Prefab")]
    public GameObject ArrowPrefab;

    void Start() {
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    // Update is called once per frame
    void Update() {
        ProcessInputs();
        Move();
        Animate();
        Aim();
        Shoot();
    }
    void ProcessInputs() {
        
        if (useController) {
            movimentoDirection = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
            movimentoSpeed = Mathf.Clamp(movimentoDirection.magnitude, 0.0f, 1.0f);
            movimentoDirection.Normalize();

            endOfAiming = Input.GetButtonUp("Fire1");
            isAiming = Input.GetButton("Fire1");
            LookPosition = Input.GetButton("Fire2");
        } else {
            Vector2 mouseMoviment = new Vector2(Input.GetAxis("Mouse X"), Input.GetAxis("Mouse Y"));            
            movimentoDirection += mouseMoviment;
            movimentoDirection.Normalize();

            movimentoSpeed = Input.GetAxis("Vertical");
            endOfAiming = Input.GetButtonUp("Fire1");
            isAiming = Input.GetButton("Fire1");
            LookPosition = Input.GetButton("Fire2");
        }
         if (LookPosition) {
           movimentoSpeed = 0.0f;
        }

        if (isAiming || shootingRecoil > 0.0f) {
            movimentoSpeed *= AIMING_BASE_PENALTY;
        }

        if (endOfAiming) {
            shootingRecoil = SHOOTING_RECOIL_TIME;
        }

        if (shootingRecoil > 0.0f) {
            shootingRecoil -= Time.deltaTime;
        }
    }
    void Move() {
        rb.velocity = movimentoDirection * movimentoSpeed * MOVIMENT_BASE_SPEED;
    }
    void Animate() {
        if (movimentoDirection != Vector2.zero) {
            animator.SetFloat("Horizontal", movimentoDirection.x);
            animator.SetFloat("Vertical", movimentoDirection.y);
        }
        animator.SetFloat("speed", movimentoSpeed);

        if (isAiming) {
            animator.SetFloat("AimingState", 0.5f);
        } else if (shootingRecoil > 0.0F) {
            animator.SetFloat("AimingState", 1.0f);
        } else {
            animator.SetFloat("AimingState", 0.0f);
        }
    }
    void Aim() {
        CROSSHEIR_DISTANCE = Mathf.Clamp(CROSSHEIR_DISTANCE, 0.0f, 1.0f);
        if(movimentoDirection != Vector2.zero) {
            CrossHeir.transform.localPosition = movimentoDirection * CROSSHEIR_DISTANCE;
        }

    }
    void Shoot() {
        Vector2 shootingDistance = CrossHeir.transform.localPosition;
        shootingDistance.Normalize();
        if (endOfAiming) {
            GameObject Arrow = Instantiate(ArrowPrefab, transform.position, Quaternion.identity);
            Arrow ArrowScript = Arrow.GetComponent<Arrow>();
            ArrowScript.velocity = shootingDistance * ARROW_BASE_SPEED;
            Arrow.transform.Rotate(0, 0, Mathf.Atan2(shootingDistance.y, shootingDistance.x) * Mathf.Rad2Deg);
            Destroy(Arrow, 2.0f);
        }

    }
}