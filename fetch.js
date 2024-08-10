fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
         const bodyTable = document.querySelector('.table-body')

         data.forEach(datas => {
            const rowTable = document.createElement('tr')

            const userId = document.createElement('td')
            userId.textContent = datas.userId;

            const id = document.createElement('td')
            id.textContent = datas.id

            const title = document.createElement('td')
            title.textContent = datas.title

            const body = document.createElement('td')
            body.textContent = datas.body
            

            // rowTable.appendChild(userId)
            rowTable.appendChild(id)
            rowTable.appendChild(title)
            rowTable.appendChild(body)

            bodyTable.appendChild(rowTable)
         });
    }
)


// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))