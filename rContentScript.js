//document.body.page-all.page-right.
for(i = 1; ((document.getElementById("r-"+i)) != null);i++)
	{
	if((document.getElementById("r-"+i+"child"))!=null){x = i-1}
	}
const columnTags = document.getElementsByTagName('td');
for(i = 1; i < columnTags.length; i++) {
	if(i == (x*7)+3) {document.write(columnTags[i])}
}