# Headless Setup of RPi Zero W
1. Download Raspbian lite and burn to microsd w/ Etcher
2. Open file explorer and add `wpa_supplicant.conf`
3. In `wpa_supplicant.conf` add the following to setup wifi:

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
    ssid="YOURSSID"
    psk="YOURPASSWORD"
    scan_ssid=1
}
```
4. Add a file called simply `ssh` (no .txt or anything!) to enable ssh by default
5. Eject from computer and install in Pi Zero W
6. Turn on Pi and wait a few minutes to let it boot
7. Use ipscanner to find ip of pi and ssh to it (can also try raspberrypi.local if Bonjour is working)
8. `sudo apt-get update` `sudo apt-get upgrade -y`
9. `sudo raspi-config`
10. change password
11. change hostname
12. update locale to US
13. Advanced->Expand filesystem

---

# Setup static IP
1. `sudo nano /etc/dhcpcd.conf`
2. 

REF: https://learn.adafruit.com/raspberry-pi-zero-creation/overview
