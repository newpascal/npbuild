set FPCDIR=%~dp0fpcsrc
set PATH=%~dp0fpc\bin\i386-win32;%~dp0binw32
start "" /D"%~dp0lazarus\" /B /W lazarus --pcp=lazarusconf --language=en