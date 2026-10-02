
(() => {
  if(localStorage.getItem("voyagent-demo-authenticated")!=="true"){location.replace("index.html");return;}
  const user=JSON.parse(localStorage.getItem("voyagent-demo-user")||"{}");
  const g=document.getElementById("user-greeting"); if(g) g.textContent=user.name?`Hi, ${user.name}`:"";
  document.getElementById("logout-btn").addEventListener("click",()=>{localStorage.removeItem("voyagent-demo-authenticated");localStorage.removeItem("voyagent-demo-user");location.href="index.html";});
  document.getElementById("trip-planner-form").addEventListener("submit",e=>{
    e.preventDefault();
    const d={
      destination:document.getElementById("destination").value.trim(),
      startDate:document.getElementById("start-date").value,
      endDate:document.getElementById("end-date").value,
      travelStyle:document.getElementById("travel-style").value,
      travellers:document.getElementById("travellers").value,
      budget:document.getElementById("budget").value,
      currency:"MYR",
      interests:[document.getElementById("interest").value]
    };
    d.travelDates=[d.startDate,d.endDate].filter(Boolean).join(" to ");
    localStorage.setItem("voyagent-pending-trip",JSON.stringify(d));
    location.href="app.html?newTrip=1";
  });
})();
