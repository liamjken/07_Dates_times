const now = new Date();

//console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));


// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));


 const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};


setInterval(tick, 1000);





// // dates & times
// const before = new Date('Febuary 1 2019 7:30:59');
// const now = new Date();

// //console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);


// console.log(mins, hours, days);

// console.log(`the blog was written ${days} days ago`);

// //converting time stamp inot date objects

// const timestamp = 1675938474990;
// console.log(new Date(timestamp));



// // console.log(typeof(now));

// // years. months, days, times

// console.log(`getFullYear`, now.getFullYear());
// console.log(`getMonth`, now.getMonth());
// console.log(`getDate`, now.getDate());
// console.log(`getDay`, now.getDay());
// console.log(`getHours`, now.getHours());
// console.log(`getMinutes`, now.getMinutes());
// console.log(`getSeconds`, now.getSeconds());

// // timestamps

// console.log('timestamp', now.getTime());

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());