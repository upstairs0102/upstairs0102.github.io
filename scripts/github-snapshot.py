"""List publishable source for authenticated GitHub Git-data upload; no credentials."""
from pathlib import Path
import subprocess,json
root=Path(__file__).resolve().parents[1]
names=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=root).decode().split('\0')
entries=[]
for name in sorted(set(names)):
    p=root/name
    if not name or not p.is_file():continue
    blob=p.read_bytes();sha=subprocess.check_output(['git','hash-object',str(p)],cwd=root).decode().strip()
    entry={'path':name,'mode':'100755' if p.stat().st_mode & 0o111 else '100644','type':'blob','sha':sha}
    try:entry['content']=blob.decode('utf-8')
    except UnicodeDecodeError:entry['binary']=True;entry['bytes']=len(blob)
    entries.append(entry)
print(json.dumps(entries,ensure_ascii=False))
