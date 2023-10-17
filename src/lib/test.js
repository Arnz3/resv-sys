DUMMY = [
	{
		"id": 2,
		"naam": "Dré Vanhoucke",
		"email": "dre_vanhoucke@hotmail.be",
		"telefoon": "0494431518",
		"datum": "2023-10-06T22:00:00.000Z",
		"aantal": 6,
		"aankomst": "23:00:00",
		"opm": "",
		"annulatie": null,
		"status": "untouched"
	},
	{
		"id": 3,
		"naam": "Arno",
		"email": "cuyversarno@gmail.com",
		"telefoon": "0468348434",
		"datum": "1899-11-29T23:00:00.000Z",
		"aantal": 12,
		"aankomst": "00:00:22",
		"opm": "dit is een test!",
		"annulatie": null,
		"status": "untouched"
	},
  {
		"id": 4,
		"naam": "Arno",
		"email": "cuyversarno@gmail.com",
		"telefoon": "0468348434",
		"datum": "1899-11-29T23:00:00.000Z",
		"aantal": 12,
		"aankomst": "00:00:22",
		"opm": "dit is een test!",
		"annulatie": null,
		"status": "goedgekeurd"
	},
  {
		"id": 4,
		"naam": "Arno",
		"email": "cuyversarno@gmail.com",
		"telefoon": "0468348434",
		"datum": "1899-11-29T23:00:00.000Z",
		"aantal": 12,
		"aankomst": "00:00:22",
		"opm": "dit is een test!",
		"annulatie": null,
		"status": "afgewezen"
	}
]


const result = DUMMY.filter((resrv) => resrv.status == "afgewezen");
console.log(result);