https://howchoo.com/g/zte5owjmztl/configure-static-ip-address-raspberry-pi
https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/

For OSMC (maybe second article?): https://osmc.tv/wiki/general/setting-up-your-network-connection/

USE `\20` instead of `\24` after IP address since subnet mask for our network is `255.255.240.0`!

For OSMC goto `My OSMC` -> `Network` -> `Wireless` and setup there. May take a minute (or a reboot) for it to take effect.
