const chartContainer = document.querySelector('.chart__container');
const chartDays = document.querySelector('.chart__days__container');

const data = ([
   {
      "day": "mon",
      "amount": 17.45
   },
   {
      "day": "tue",
      "amount": 34.91
   },
   {
      "day": "wed",
      "amount": 52.36
   },
   {
      "day": "thu",
      "amount": 31.07
   },
   {
      "day": "fri",
      "amount": 23.39
   },
   {
      "day": "sat",
      "amount": 43.28
   },
   {
      "day": "sun",
      "amount": 25.48
   }
]
)
const chartFunctionality = () => {
   const charts = document.querySelectorAll('.chart')
   const chartItem = document.querySelectorAll('.chart__item')
   const chartAmount = document.querySelectorAll('.amount')

   charts.forEach((el, i) => {
      el.style.height = `${data[i].amount * 3}px`
      el.addEventListener('mouseover', () => {
         chartAmount[i].classList.remove('invisible')
         el.style.opacity = '.8';
      })
      el.addEventListener('mouseout', () => {
         chartAmount[i].classList.add('invisible')
         el.style.opacity = '1';
      })

      //Mobile
      el.addEventListener('touchstart', () => {
         chartAmount[i].classList.remove('invisible')
         el.style.opacity = '.8';
      })
      el.addEventListener('touchend', () => {
         chartAmount[i].classList.add('invisible')
         el.style.opacity = '1';
      })
   })
}

const addCharts = () => {
   data.forEach((_, i) => {
      chartContainer.insertAdjacentHTML('beforeend',
         `<div class="chart__item">
            <p class="amount invisible amount__${i}">$${data[i].amount}</p>
            <div class="chart chart__${i}"></div>
            <p class="day">${data[i].day}</p>
         </div>`
      )
   })
   chartFunctionality()
}
addCharts()
