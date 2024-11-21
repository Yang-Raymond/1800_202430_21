document.querySelectorAll("input[calendar]").forEach(function(cur) {
    cur.setAttribute("year", "YYYY")
    cur.setAttribute("month", "MM")
    cur.setAttribute("day", "DD")
    cur.setAttribute("hour", "--")
    cur.setAttribute("min", "--")
    formatCalendarInput(cur)
})

// document.querySelector("#testButton").addEventListener("click", function() {
    // updateCalendarRestrictions(document.querySelector('[data-bs-toggle="popover"]'))
// })

const calendarString = `<div id="dateTimeWidget">         
                        <div class="row">

                            <div id="dateSelectorDiv" class="col-12 col-sm-6 d-flex flex-column">

                                <div class="row">

                                    <div class="row m-0 col-12 flex-nowrap align-items-center text-center">
                                        <div class="col-1 g-0">
                                            <button type="button" id="decreaseCalendarMonth" class="btn btn-outline-primary p-0 calendarArrow">&lt</button>
                                        </div>
                                        <div class="col-6 g-0">
                                            <select id="monthSelector" class="form-select" name="" id="">
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                             </select>
                                        </div>
                                        <div class="col-4 g-0">
                                            <input type="number" id="yearSelector" class="form-control" min="2020" max="9999" value="2024" name="" id="">
                                        </div>
                                        <div class="col-1 g-0">
                                            <button type="button" id="increaseCalendarMonth" class="btn btn-outline-primary p-0 calendarArrow">&gt</button>
                                        </div>
                                    </div>
                               
                                    <div class="col-12">
                                        <table id="daySelector" class="table-sm">
                                            <tr id="weekdays">
                                                <th class="weekday">Sun</th>
                                                <th class="weekday">Mon</th>
                                                <th class="weekday">Tue</th>
                                                <th class="weekday">Wed</th>
                                                <th class="weekday">Thu</th>
                                                <th class="weekday">Fri</th>
                                                <th class="weekday">Sat</th>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                                <td class="calendarDay">
                                                    <label class="btn btn-outline-primary">
                                                        <span class="calendarDayValue"></span>
                                                        <input type="radio" autocomplete="off" class="btn-check" name="day">
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        
                            <div id="timeSelectorDiv" class="col-12 col-sm-6 d-flex flex-column justify-content-evenly align-items-center">

                                <div id="AMSelector" class="">
                                    <span>AM</span>
                                    <div class="row g-1 flex-wrap">
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">12:00</span>
                                                <input value="00" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">1:00</span>
                                                <input value="01" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">2:00</span>
                                                <input value="02" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">3:00</span>
                                                <input value="03" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">4:00</span>
                                                <input value="04" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">5:00</span>
                                                <input value="05" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">6:00</span>
                                                <input value="06" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">7:00</span>
                                                <input value="07" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">8:00</span>
                                                <input value="08" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">9:00</span>
                                                <input value="09" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">10:00</span>
                                                <input value="10" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">11:00</span>
                                                <input value="11" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div id="PMSelector" class="">
                                    <span>PM</span>
                                    <div class="row d-flex g-1 flex-wrap">
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">12:00</span>
                                                <input value="12" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">1:00</span>
                                                <input value="13" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">2:00</span>
                                                <input value="14" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">3:00</span>
                                                <input value="15" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">4:00</span>
                                                <input value="16" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">5:00</span>
                                                <input value="17" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">6:00</span>
                                                <input value="18" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">7:00</span>
                                                <input value="19" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">8:00</span>
                                                <input value="20" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">9:00</span>
                                                <input value="21" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">10:00</span>
                                                <input value="22" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                        <div class="col-3 timeButton">
                                            <label class="btn btn-outline-primary">
                                                <span class="timeValue">11:00</span>
                                                <input value="23" type="radio" autocomplete="off" class="btn-check" name="time">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                        
                    </div>`

const calendarNode = new DOMParser().parseFromString(calendarString, "text/html").body.firstElementChild;

console.log(calendarNode)

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(async function(popoverTriggerEl) {
    const data = calendarNode.cloneNode(true);

    data.popupElement = popoverTriggerEl
    data["restrictions"] = {
        year:[],
        month:[],
        day:[],
        hour:[]
    }
    data["lastSelectedDate"] = new Date("null");

    const options = {
        sanitize: false,
        content: data,
        html: true
    };

    const newPopover = new bootstrap.Popover(popoverTriggerEl, options)

    console.log(newPopover)

    newPopover.show();
    newPopover.hide();

    let popover = await bootstrap.Popover.getInstance(popoverTriggerEl)

    const calendarArrows = data.querySelectorAll(".calendarArrow");
        console.log("Number of .calendarArrow elements:", calendarArrows.length);
        
        calendarArrows.forEach(function(cur) {
            // Check if the event listener is already attached
            if (!cur.hasAttribute('listener-attached')) {
                cur.addEventListener("click", function() {
                    if (cur.id == "increaseCalendarMonth") {
                        handleCalendarArrow(data, true);
                    } else if (cur.id == "decreaseCalendarMonth") {
                        handleCalendarArrow(data, false);
                    }
                });
                cur.setAttribute('listener-attached', true)
            } else {
                console.log("warning extra event listener");
            }
        });

    const calendarDays = data.querySelectorAll(".calendarDay input");
        console.log("Number of .calendarDay elements:", calendarDays.length);
        
        calendarDays.forEach(function(cur) {
            // Check if the event listener is already attached
            if (!cur.hasAttribute('listener-attached')) {
                cur.addEventListener("change", function() {
                    handleCalendarDay(data);
                });
                cur.setAttribute('listener-attached', true)
            } else {
                console.log("warning extra event listener");
            }
        });    

    const calendarMonth = data.querySelector("#monthSelector");  
        calendarMonth.addEventListener("input", function() {
            handleCalendarMonth(data);
        });
                
    const calendarYear = data.querySelector("#yearSelector");  
        calendarYear.addEventListener("change", function() {
            handleCalendarYear(data);
        });

    const timeButtons = data.querySelectorAll(".timeButton input");
        console.log("Number of .timeButtons elements:", timeButtons.length);
        
        timeButtons.forEach(function(cur) {
            // Check if the event listener is already attached
            if (!cur.hasAttribute('listener-attached')) {
                cur.addEventListener("change", function() {
                    handleTimeButton(data);
                });
                cur.setAttribute('listener-attached', true)
            } else {
                console.log("warning extra event listener");
            }
        });   

    popoverTriggerEl.addEventListener('show.bs.popover', async function() {      
        // console.log(popoverTriggerEl)
        let inputField = popoverTriggerEl.firstElementChild
        // console.log(inputField)
        populateCalendar(data, inputField.getAttribute("year"), inputField.getAttribute("month"), data["lastSelectedDate"])

    })
});

function formatCalendarInput(input) {
    input.value = `${input.getAttribute("year")}-${input.getAttribute("month")}-${input.getAttribute("day")} ${input.getAttribute("hour")}:${input.getAttribute("min")}`
}

function handleCalendarArrow(calendar, increase) {
    console.log("run Arrow")

    let calendarMonthSelector = calendar.querySelector("#monthSelector")
    let calendarYear = +calendar.querySelector("#yearSelector").value
    let inputField = calendar.popupElement.firstElementChild
    

    // values from 1-12 for months
    let monthNum = +((increase) ? +calendarMonthSelector.value + 1: calendarMonthSelector.value -1);
    console.log(monthNum)
    if (monthNum < 1) {
        populateCalendar(calendar, calendarYear - 1, monthNum += 12)
    } else if (monthNum > 12) {
        populateCalendar(calendar, calendarYear + 1, monthNum %= 12)
    } else {
        populateCalendar(calendar, calendarYear, monthNum, calendar.lastSelectedDate)
    }

    
}

function handleCalendarDay(calendar) {
    console.log("run day")

    let calendarMonth = calendar.querySelector("#monthSelector").value
    let calendarYear = calendar.querySelector("#yearSelector").value
    let clickedInput = calendar.querySelector("#daySelector input[type='radio']:checked")

    let selectedDate = new Date(clickedInput.value)
    console.log(selectedDate)
    let inputField = calendar.popupElement.firstElementChild;

    if (calendarYear.length > 4) {
        calendarYear = calendarYear.slice(0, 4)
    }

    

    if (clickedInput.classList.contains("notInMonth")) {
        inputField.setAttribute("month", (selectedDate.getMonth() + 1 < 10) ? '0' + (selectedDate.getMonth() + 1) : selectedDate.getMonth() + 1)
        inputField.setAttribute("year", selectedDate.getFullYear())
    } else {
        inputField.setAttribute("month", calendarMonth)
        inputField.setAttribute("year", calendarYear)
    }
    inputField.setAttribute("day", selectedDate.getDate())
    formatCalendarInput(inputField)

    resetTimeDiv(calendar)

    populateCalendar(calendar, inputField.getAttribute("year"), inputField.getAttribute("month"), selectedDate)
}

function handleCalendarMonth(calendar) {
    console.log("run month")

    let calendarMonth = calendar.querySelector("#monthSelector").value
    let calendarYear = calendar.querySelector("#yearSelector").value
    let inputField = calendar.popupElement.firstElementChild;
    

    inputField.setAttribute("month", calendarMonth)
    formatCalendarInput(inputField)
    resetTimeDiv(calendar)

    let selectedDate = new Date(inputField.getAttribute("year"), +inputField.getAttribute("month") -1, inputField.getAttribute("day"))
    populateCalendar(calendar, inputField.getAttribute("year"), inputField.getAttribute("month"), selectedDate)
}

function handleCalendarYear(calendar) {
    console.log("run year")

    let calendarYear = calendar.querySelector("#yearSelector").value
    let inputField = calendar.popupElement.firstElementChild;

    if (calendarYear.length > 4) {
        calendarYear = calendarYear.slice(0, 4)
    }

    while (calendarYear.length < 4) {
        calendarYear = "0" + calendarYear
    }
    
    inputField.setAttribute("year", calendarYear)
    formatCalendarInput(inputField)
    resetTimeDiv(calendar)

    let selectedDate = new Date(inputField.getAttribute("year"), +inputField.getAttribute("month") -1, inputField.getAttribute("day"))

    populateCalendar(calendar, inputField.getAttribute("year"), inputField.getAttribute("month"), selectedDate)
}

function resetTimeDiv(calendar) {
    let checkedTime = calendar.querySelector(".timeButton input[type='radio']:checked")
    let inputField = calendar.popupElement.firstElementChild;

    if (checkedTime) {
        console.log("unchecked")
        checkedTime.checked = false;
    }

    console.log("inputfields cleared")
    inputField.setAttribute("hour", "--")
    inputField.setAttribute("min", "--")
    formatCalendarInput(inputField)
}

function handleTimeButton(calendar) {
    let clickedInput = calendar.querySelector(".timeButton input[type='radio']:checked")
    let inputField = calendar.popupElement.firstElementChild;

    inputField.setAttribute("hour", clickedInput.value)
    inputField.setAttribute("min", "00")
    formatCalendarInput(inputField)
}



// month is 01-12
function populateCalendar(calendar, year, month, selectedDate) {

    let today = new Date();

    console.log("populateCalendar inputs:", year, month, selectedDate)

    if (!(+year < 9999 && +year > -1)) {
        year = today.getFullYear();
    }

    if (+month) {
        month = +month -1
        console.log(month)
    } else {
        month = today.getMonth();  
    }

    calendar.querySelector("#yearSelector").value = year;
    calendar.querySelector("#monthSelector").children[+month].selected = true;
 
    let processingDay = new Date(year, month, 1)

    //console.log("processingDay date:", processingDay)

    let index = -processingDay.getDay();
    //console.log(index)
    processingDay.setDate(index)
    

    calendar.querySelectorAll(".calendarDayValue").forEach(element => {
        processingDay.setDate(processingDay.getDate() + 1)
        element.innerHTML = `${processingDay.getDate()}`;
        element.nextElementSibling.value = processingDay;
        
        // console.log(checkDay(processingDay, element.nextElementSibling))
        // console.log("day restrictionss", calendar["restrictions"]["day"])
        if (!checkDay(processingDay, element.nextElementSibling, calendar["restrictions"]["day"])) {
            element.nextElementSibling.disabled = false;
        }

        if (month != processingDay.getMonth()) {
            element.nextElementSibling.classList.add("notInMonth")
           // console.log(element.nextElementSibling);
        } else {
            element.nextElementSibling.classList.remove("notInMonth")
        }
        
        if (processingDay.getFullYear() == today.getFullYear() && processingDay.getMonth() == today.getMonth() && processingDay.getDate() == today.getDate()) {
            element.parentNode.classList.add("outline")
        } else {
            element.parentNode.classList.remove("outline")
        }

        if (selectedDate && processingDay.getFullYear() == selectedDate.getFullYear() && processingDay.getMonth() == selectedDate.getMonth() && processingDay.getDate() == selectedDate.getDate()) {
            if (!element.nextElementSibling.hasAttribute("disabled")) {
                element.nextElementSibling.checked = true;
                calendar["lastSelectedDate"] = selectedDate;
            } else {
                element.nextElementSibling.checked = false;
                calendar["lastSelectedDate"] = new Date("null");

                let inputField = calendar.popupElement.firstElementChild;
                inputField.setAttribute("day", "DD")
                formatCalendarInput(inputField)
            }
            
        } else {
            element.nextElementSibling.checked = false;
            
        }
        index++
    });
}

//populateCalendar(document.getElementById("dateTimeWidget"), "2023", "08", "04")

const testRestrictions = [
    "(w)()(6-11)()()()",

    "(b)()()(10-15)()()",

    "(w)()()()(0-3)()",

    "(b)()()()()(00-23)",

    "(w)()()()()()",

    "(b)()()(8)()()",
]

//(mm-mm)(dd-dd)(w-w)(hh-hh)
//(01-12)(01-31)(0-6)(00-23)
function parseRestrictions(restrictions) {
    let result = []
    restrictions.forEach(restrction => {
        // console.log(restrction)
        let restrictionParts = [...restrction.matchAll(/\((.*?)\)/gm)]
        // console.log(restrictionParts)
        if (restrictionParts.length != 6) {
            //checks if it found all six parts
            console.log("invalid restriction")
        } else {
            let formatedRestriction = [restrictionParts[0][1]];
            let realTarget = "y";
            let potTarget;
            let limitBottom;
            let limitTop;
            for(let i = 1; i < 6; i++) {
                let restrictionPart = restrictionParts[i]
                // console.log(restrictionPart, i)
                // console.log(restrictionPart[1])

                switch (i) {
                    case 1:
                        potTarget = "y"
                        break;
                    case 2:
                        potTarget = "m"
                        break;
                    case 3:
                    case 4:
                        potTarget = "d"
                        break;
                    case 5:
                        potTarget = "t"
                        break;
                }

                let restrictionPartValue = restrictionPart[1].match(/\d+/gm)

                // console.log(restrictionPartValue)

                if (restrictionPartValue) {
                    realTarget = potTarget;
                }
                formatedRestriction.push((restrictionPartValue) ? restrictionPartValue : [])
            }

            // console.log(realTarget)
            formatedRestriction.splice(1, 0, realTarget)   
            result.push(formatedRestriction)

        } 
    });
    console.log(result)
    return result;
}

/*[
    [w/b, y/m/d/t, [], [], [], [], []],
    [w/b, y/m/d/t, [], [], [], [], []],
    [w/b, y/m/d/t, [], [], [], [], []],
    [w/b, y/m/d/t, [], [], [], [], []],
  ] 
*/
async function updateCalendarRestrictions(popoverElement, restrictions) {
    restrictions = parseRestrictions(testRestrictions)
    let popover = bootstrap.Popover.getInstance(popoverElement)["_config"]["content"]
    restrictions.forEach(function(cur) {
        switch (cur[1]) {
            case "y":
                popover["restrictions"]["year"].push(cur)
                break;
            case "m":
                popover["restrictions"]["month"].push(cur)
                break;    
            case "d":
                popover["restrictions"]["day"].push(cur)
                break;
            case "t":
                popover["restrictions"]["hour"].push(cur)
                break;
            default:
                console.log("bad restriction: ", cur)
        }
    })
}

function checkDay(date, element, dayRestrictions) {
    let done = false;
    dayRestrictions.forEach( function(cur) {
        if (handleRestrictionParts(date.getFullYear(), cur[2])) {
            if (handleRestrictionParts(date.getMonth() + 1, cur[3])) {
                // console.log("1")
                if (handleRestrictionParts(date.getDate(), cur[4])) {
                    // console.log("2")
                    if (handleRestrictionParts(date.getDay() + 1, cur[5])) {
                        // console.log("3")
                        element.setAttribute("disabled", true)
                        done = true
                    }
                }
            }
        }
    })
    return done;
}

function handleRestrictionParts(realValue, part) {
    if (part.length == 0) {
        return true
    } else if (part.length == 1) {
        return realValue == +part[0]
    } else if (part.length == 2) {
        return (realValue >= +part[0] && realValue <= +part[1])
    } else {
        console.log("bad restriction part", part)
    }
}

