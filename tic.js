
var cells = document.querySelectorAll('td');
var restart = document.querySelector('#but');
//Restart button
function clearb()
{
	// for(var i=0;i<cells.length;i++)
	for(cell of cells)
	{
		cell.textContent='';
	}
}
restart.addEventListener('click',clearb);

//EventListeners for loop
function changecon()
{
	if(this.textContent === 'X')
			this.textContent = 'O';
		else if(this.textContent ==='O')
			this.textContent = ' ';
		else
			this.textContent = 'X';
}
for(cell of cells)
{
	cell.addEventListener('click',changecon);
}


