/*
 * From Now - Dummy Demo
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2022
 */

let timezone = (new Date()).getTimezoneOffset() * 60000
	localISOTime = new Date(Date.now() - timezone)
	barusaja = localISOTime.toISOString().split('.')[0]
	limamenitlalu = new Date(localISOTime.setMinutes(localISOTime.getMinutes() - 5)).toISOString().split('.')[0]
	duajamlalu = new Date(localISOTime.setHours(localISOTime.getHours() - 2)).toISOString().split('.')[0]
	kemarin = new Date(localISOTime.setDate(localISOTime.getDate() - 1)).toISOString().split('.')[0]
	lusa = new Date(localISOTime.setDate(localISOTime.getDate() - 2)).toISOString().split('.')[0]
	tigaharilalu = new Date(localISOTime.setDate(localISOTime.getDate() - 3)).toISOString().split('.')[0]
	empatharilalu = new Date(localISOTime.setDate(localISOTime.getDate() - 4)).toISOString().split('.')[0]
	limaharilalu = new Date(localISOTime.setDate(localISOTime.getDate() - 5)).toISOString().split('.')[0]
	enamharilalu = new Date(localISOTime.setDate(localISOTime.getDate() - 6)).toISOString().split('.')[0]
	tanggalposting = [barusaja,limamenitlalu,duajamlalu,kemarin,lusa,tigaharilalu,empatharilalu,limaharilalu,enamharilalu]

let waktu = document.querySelectorAll('time')
for (let i = 0; i < tanggalposting.length; i++) {
	waktu[i].setAttribute('datetime',tanggalposting[i])
}
