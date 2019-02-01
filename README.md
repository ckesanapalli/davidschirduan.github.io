Games, Downloads, and Posts from David Schirduan

Based upon Hydejack by qwtel

For local development on docker, change url to localhost, and run this command within local repo folder:

docker run --rm --volume=$(pwd):/srv/jekyll -v 'JEKYLL_ENV=production' -it -p 4000:4000 jekyll/jekyll jekyll serve --incremental