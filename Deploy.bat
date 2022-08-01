@ECHO OFF

REM Configurable variables
SET host=eppel.myweb.cs.uwindsor.ca
SET remotepath=/public_html/homegoods/
SET user=eppel
REM Password is asked for when Deploy is called

CD %~dp0/
SCP -r build/** %user%@%host%:%remotepath%
