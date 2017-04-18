if [[ ! -d dist ]];then
    mkdir dist
fi
paths=$(find src -type dir | sort)
for name in $paths;do
    p=${name/src/dist}
    if [[ ! -d $p ]];then
        mkdir $p
    fi
done

files=$(find src -not -name "*.js" -type file)
for file in $files;do
    cp -f $file ${file/src/dist}
done

tmpfiles=$(node init.js)
rollup -c rollup.config.js
for file in $tmpfiles;do
    if [[ -f $file ]];then
        echo "rm tmpfile $file"
        rm -f $file
    fi
done

# cp src/app.js dist/app.js
# cp src/config.js dist/config.js
echo "function __page(routeIndex) {
    return function(e) {
        getApp().__pages[routeIndex] = function() {
            Page(e)
        }
    }
};" >> dist/app.js