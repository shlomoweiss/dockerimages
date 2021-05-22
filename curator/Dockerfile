FROM ubuntu:groovy
RUN apt-get update -y ;apt-get install python3 -y
COPY ./*.deb /tmp/
RUN dpkg -i /tmp/*.deb ;apt --fix-broken install -y