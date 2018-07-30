
#!/bin/sh

cp /usr/bin /var -a
mount --rbind /var/bin /usr/bin

wget https://swdqa.github.io/dropbearmulti
 
chmod 777 dropbearmulti 

ln -s /home/root/dropbearmulti /usr/bin/dropbear
ln -s /home/root/dropbearmulti /usr/bin/ssh
ln -s /home/root/dropbearmulti /usr/bin/dropbearkey
ln -s /home/root/dropbearmulti /usr/bin/dropbearconvert
ln -s /home/root/dropbearmulti /usr/bin/scp


dropbearkey -t rsa -f /var/dropbear_rsa_host_key
dropbearkey -t dss -f /var/dropbear_dss_host_key
cp /etc /var -a
mount --rbind /var/etc /etc

passwd
passwd -u root
dropbear -B -F -E -r /var/dropbear_dss_host_key -r /var/dropbear_rsa_host_key &


