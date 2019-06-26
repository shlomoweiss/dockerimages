FROM zookeeper:3.4.14
ENV ZOO_DATA_DIR=/data2 \
    ZOO_DATA_LOG_DIR=/datalog2 \
    ZOO_LOG_DIR=/logs2 
RUN useradd -u 1003 -g root zoo2
RUN chmod -R 775 /conf
RUN chown -R  zoo2.root /conf
RUN mkdir -p /data2
RUN chmod -R 775 /data2
RUN chown   zoo2.root /data2
RUN mkdir -p /log2
RUN chmod -R 775 /log2
RUN chown   zoo2.root /log2

RUN mkdir -p /datalog2
RUN chmod -R 775 /datalog2
RUN chown   zoo2.root /datalog2
COPY docker-entrypoint2.sh /
ENTRYPOINT ["/docker-entrypoint2.sh"]
CMD ["zkServer.sh", "start-foreground"]
USER 1003