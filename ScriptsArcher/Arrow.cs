using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Arrow : MonoBehaviour{
    public Vector2 velocity = new Vector2(0.0f, 0.0f);
    public GameObject player;
    public Vector2 offSet = new Vector2(0.0f, 0.0f);

    void Update() {
        Vector2 currentPosition = new Vector2(transform.position.x, transform.position.y);
        Vector2 newPosition = currentPosition + velocity * Time.deltaTime;

        Debug.DrawLine(currentPosition + offSet, newPosition + offSet, Color.red);

        RaycastHit2D[] hits = Physics2D.LinecastAll(currentPosition + offSet, newPosition + offSet);

        foreach (RaycastHit2D hit in hits) {
            GameObject other = hit.collider.gameObject;
            if (other != player) {
                if (other.CompareTag("Player")) {
                    Destroy(gameObject);
                    Debug.Log(other.name);
                    break;
                }
                if (other.CompareTag("Walls")) {
                    Destroy(gameObject);
                    break;
                }
            }            
        }

        transform.position = newPosition;
    }

}
