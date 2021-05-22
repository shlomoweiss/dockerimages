Dockerfile to curator 5.8
down load files localy from  https://packages.debian.org/bullseye/elasticsearch-curator
elasticsearch-curator_5.8.1-1_all.deb 
python3-elasticsearch_7.1.0-3_all.deb 
python3-elasticsearch-curator_5.8.1-1_all.deb
python-elasticsearch-curator-doc_5.8.1-1_all.deb

the run the command:
sudo docket build -t <artifactory rep name>/curator:1.0.0.0 .

 to run curator comman line:
 curator [--config CONFIG.YML] [--dry-run] ACTION_FILE.YML 
to use:
sudo docker run -it <artifactory rep name>/curator:1.0.0.0 /usr/bin/curator --help
 
