import re
line = "hello how are yoy";
search_object=re.search(r'.*t?(.*t?)(.*t?)',line)
ifsearch_object;
print("search object group:",search_object.group());
print("search object group1:",search_object.group(1));
print("search object group 2:",search_object.group(2));
else
print("Nothing found!!") 