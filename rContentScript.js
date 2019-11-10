//document.body.page-all.page-right.
for(i = 1; ((document.getElementById("r-"+i)) != null);i++)
	{
	if((document.getElementById("r-"+i+"child"))!=null){x = i-1}
	}
	
//+3 is prof, + 1 is course number
const columnTags = document.getElementsByTagName('td');
for(i = 1; i < columnTags.length; i++) {
	if(i == (x*7)+3) {y = (columnTags[i].innerHTML)}
}
z = y.split("")
lank = true;
b=0;
w=[];
for(i = 0; i < z.length; i++) {
	
	if(!lank){
		w[b]=(z[i]);
		b++;
	}
	if(z[i] == '>')
	{
		lank = false;
	}
	if(lank == false && z[i] == '<')
	{
		lank = true;
	}
}
w.pop();
w.pop();
for(j = 0; j < w.length; j++) {
	if(w[j] == " ")
	{
		w[j] = "+";
	}
} //this works.

window.open("https://www.ratemyprofessors.com/search.jsp?query=utd+"+w.join(""));