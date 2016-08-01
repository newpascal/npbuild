
start "" /D"%~dp0fpc\bin\i386-win32" /B /W "%~dp0fpc\bin\i386-win32\fpcmkcfg.exe" -t "%~dp0fpc\fpc.cft" -d basepath="%~dp0fpc" -d sharepath="%~dp0fpc" -d mormotpath="%~dp0ccr\mORMot" -o "%~dp0fpc\bin\i386-win32\fpc.cfg"
