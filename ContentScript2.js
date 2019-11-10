const profTags = document.getElementsByClassName("listing PROFESSOR");
theProfTag = profTags[0].innerHTML;
profSplit = theProfTag.split("");
a1 = [profSplit[0], profSplit[1], profSplit[2], profSplit[3], profSplit[4]];
aLink = [];
done = false;
for(i = 5; i < profSplit.length && !done; i++) {
	if((a1[0] == "?") && (a1[1] == "t") && (a1[2] == "i") && (a1[3] == "d") && (a1[4] == "=")){
		if(profSplit[i] != '"') {
			aLink.push(profSplit[i]);
		}
		else {
			done = true;
		}
	}
	else{
		a1[0] = a1[1];
		a1[1] = a1[2];
		a1[2] = a1[3];
		a1[3] = a1[4];
		a1[4] = profSplit[i];
	}
}

window.open("https://www.ratemyprofessors.com/ShowRatings.jsp?tid="+aLink.join(""));
window.close();