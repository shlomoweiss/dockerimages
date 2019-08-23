FROM wurstmeister/kafka:2.11-2.0.0
ENV USER=kafka2
ENV UID=1003
ENV GID=0

RUN adduser \
    --disabled-password \
    --gecos "" \
    --ingroup "$USER" \
    --no-create-home \
    -G root \
    --uid "$UID" \
    "$USER"
    
    
ARG kafka_version=2.0.0
ARG scala_version=2.11




ENV KAFKA_VERSION=$kafka_version \
    SCALA_VERSION=$scala_version \
    KAFKA_HOME=/opt2/kafka \
    KAFKA_LOG_DIRS=/kafka2 \
    GLIBC_VERSION=$glibc_version

ENV PATH=${PATH}:${KAFKA_HOME}/bin



RUN mkdir /opt2 \
 && mkdir /kafka2 \
 && cp -R /opt/kafka_* /opt2/. \
 && ln -s /opt2/kafka_${SCALA_VERSION}-${KAFKA_VERSION} /opt2/kafka \
 && chmod -R 775 /opt2 \
 && chmod -R 775 /kafka2 \
 && chown -R kafka2.root /opt2
 

RUN chown -R kafka2.root /kafka2

VOLUME ["/kafka2"]
CMD ["start-kafka.sh"]
USER 1003