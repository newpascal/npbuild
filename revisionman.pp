program revisionman;

{$ifdef fpc}
{$mode delphi}
{$endif}
{$APPTYPE CONSOLE}

uses
  System.SysUtils, SynCommons, SynCrtSock;

var
  v: Variant;
  i: Integer;
  r: RawUTF8;
begin
  r := HttpGet('https://api.github.com/repos/newpascal/freepascal/branches');
  v := _JsonFast(r);
  if VariantEquals(v,'') then
    halt(1);
  if v._kind<>ord(dvArray) then
    halt(2);

  try
    for i := 0 to v._count-1 do
      if v._(i).name = 'master' then
        writeln(v._(i).commit.url);

  except
    halt(3);
  end;
  //writeln(r);
  readln;
end.
