# Overclock:

# Turn off on-board LEDS:

# Natural Scrolling:
`sudo nano /usr/share/X11/xorg.conf.d/40-libinput.conf`
goto: `Identifier "libinput pointer catchall"`
add line: `Option "NaturalScrolling" "true"`

see: [man page](https://systutorials.com/docs/linux/man/4-libinput)
     [guide](https://wiki.debian.org/LibinputTouchpad)
