#!/bin/bash

modprobe msr
rdmsr 0x1FC
wrmsr 0x1FC 4004d
lscpu | grep -i mhz
lscpu | grep -i mhz
lscpu | grep -i mhz
lscpu | grep -i mhz
lscpu | grep -i mhz

