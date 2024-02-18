const ticketPrice = 550;
let count = 0;
let totalPrice = 0;

const ticketBtns = document.querySelectorAll(".ticket-btn");
// console.log(ticketBtn);

for (let index = 0; index < ticketBtns.length; index++) {
    const ticketBtn = ticketBtns[index];

    ticketBtn.addEventListener("click", function(e){
        const title = ticketBtn.querySelector("button").innerText;

        if(count < 4)
        {
            const seatPrice = document.getElementById("seat-price");
            const div = document.createElement("div");
            div.classList.add("flex","justify-between");
            seatPrice.appendChild(div);
            const p = document.createElement("p");
            p.innerText = title
            div.appendChild(p);

            const p2 = document.createElement("p");
            p2.innerText = "Economoy";
            div.appendChild(p2);

            const p3 = document.createElement("p");
            p3.innerText = ticketPrice;
            div.appendChild(p3);

            document.getElementById("update-seat").innerText = ++count;
            const totalSeat = parseInt(document.getElementById("total-seat").innerText);
            document.getElementById("total-seat").innerText = totalSeat - 1;

            const color = ticketBtn.querySelector("button");
            color.classList.add("bg-green-500","text-white");

            totalPrice = 550 * count;
            document.getElementById("total-price").innerText = totalPrice;
            e.target.setAttribute("disabled", true);
        }else{
            alert("You are no avail to select more than four seat in same time");
        }

    });
}

function discount()
{   
    const couponField = document.getElementById("coupon-field").value;
    if(couponField === "NEW15")
    {
        const discountPrice = totalPrice * 0.15;
        document.getElementById("grand-total").innerText = (totalPrice - discountPrice);
        const couponContainer = document.getElementById("coupon-container");
        couponContainer.classList.add("hidden");
    }else if(couponField === "Couple 20")
    {
        const discountPrice = totalPrice * 0.20;
        document.getElementById("grand-total").innerText = (totalPrice - discountPrice);
        const couponContainer = document.getElementById("coupon-container");
        couponContainer.classList.add("hidden");
    }
}
    
// function checkValidity()
// {
//     const name = document.getElementById("name").value;
//     const phn = document.getElementById("phone").value;

//     if(name === null && phn === null)
//     {
//         alert("Please Input your name and phone number");
//     }
// }