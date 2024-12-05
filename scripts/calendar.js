//List of calendars popovers
const initalizedWidgets = []

//hides popovers if a non-popover is clicked
document.addEventListener("click", function(event) {
    if(!event.target.closest(".popover")) {
        hideCalendars()}
    }
)

//hides all calendar popovers
function hideCalendars() {
    initalizedWidgets.forEach(function(cur) {
        cur.hide()
    })
}

//Initalizes a calendar on an input with the calendar attribute
export async function addCalendar(inputElement) {
    if (inputElement.nodename = "inputElement" && inputElement.hasAttribute("calendar")) {
        inputElement.setAttribute("widget-bs-toggle", "popover" );
        inputElement.setAttribute("widget-bs-placement", "bottom");
        return await initalizeWidget(inputElement)
    } else {
        console.log("can't assign calendar to: ", inputElement)
    }
} 

//The calendar's html as a string
let calenderString = `<div id="dateTimeWidget">         
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
                                            <input type="number" id="yearSelector" class="form-control" min="0" max="9999" value="2024" name="" id="">
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
                    </div>`;

//The calendar's html as a node
const widgetHTML = new DOMParser().parseFromString(calenderString, "text/html").body.firstElementChild;


//Calendar logic
async function initalizeWidget(originInput) {

    //Make the popover
        const content = widgetHTML.cloneNode(true);

        const options = {
            sanitize: false,
            content: content,
            html: true
        };

        const widget = new bootstrap.Popover(originInput, options)

        initalizedWidgets.push(widget)
    
    //Data storage for the calendar
        //input bar values
        //Stores numeric values (0-9999), (1-12), (1-31), (0-23)
        widget["selectedValues"] = {
            year: null,
            month: null,
            day: null,
            hour: null,
        }

        //What is being seen on in the widget
        //Stores numeric values (0-9999), (1-12), day is a date object
        widget["currentView"] = {
            year: null, //for year, month, and day selector
            month: null, //for month and day selector
            day: null, //for time selector
        }

        //Each set of restrictions, sorted by the most most percise part of the restriction
        //Restrictions are formatted via parseRestrctions()
        widget["restrictions"] = {
            year:[],
            month:[],
            day:[],
            hour:[]
        }

        //Functions to run when the calendar value changes
        widget.onChangeFunc = []

        //min and max are date objects that determine the minimum and maximum dates selectable
        widget.min = null;
        widget.max = null;

        //How far backwards time restrictions should apply (1 hr does nothing)
        widget.period = 1;
      
    //Calendar functions    
        //Refreshes the associated input field to reflect the values in widget.selectedValues
        widget.refreshInput = function() {

            // `{Month} {day}, {year} {hour}:{min} {AM}/{PM}`

            let month = widget.selectedValues.month;
            let day = widget.selectedValues.day;
            let year = widget.selectedValues.year;
            let hour = widget.selectedValues.hour;

            month = (month && +month < 13 && +month > -1) ? month : "MM";
            day = (day && +day) ? day : "DD";
            year = (year && +year < 10000 && +year > -1) ? year : "YYYY";
            hour = (hour && +hour < 24 && +hour > -1) ? (new Intl.DateTimeFormat("en-US", {hour: "numeric", minute: "numeric",}).format(new Date(1, 1, 1, hour))) : "--:--"

            widget["_element"].value = `${year}-${month}-${day} ${hour}`

            let validDateCheck = new Date(widget["_element"].value)

            if (validDateCheck.valueOf() && widget.checkIfRestricted(validDateCheck)) {
                //console.log("invalid")
                console.log(widget["_element"])
                widget["_element"].setCustomValidity("Restricted field.");
            } else {
                //console.log("valid")
                widget["_element"].setCustomValidity("");
            }


            widget.onChangeFunc.forEach(function(func) {
                func(`${year}-${month}-${day} ${hour}`)
            })
            

        }

        //Returns the value of the input field if it is a real date, otherwise return null
        widget.getValue = function() {
            let validDateCheck = new Date(widget["_element"].value)
            return (validDateCheck.valueOf()) ? validDateCheck : null;
        }

        //Resets the selected date and the and input field only (no reseting min, max etc)
        widget.resetFields = function() {
            widget["selectedValues"] = {
                year: null,
                month: null,
                day: null,
                hour: null,
            }
        
            widget["currentView"] = {
                year: null, //for year, month, and day selector
                month: null, //for month and day selector
                day: null, //for time selector
            }
            widget.refreshInput()
        }

        //regenerates the value and the styling for the day buttons
        widget.refreshCalendar = function() {

            let today = new Date()

            let year = widget.currentView.year;
            let month = widget.currentView.month;

            //Default values for year and month
            year = (typeof year == "number" && (year < 9999 && year > -1)) ? year : today.getFullYear();
            month = (typeof month == "number" && (month < 13 && month > 0)) ? month -1 : today.getMonth();

            widget.currentView.year = year;
            widget.currentView.month = month + 1;

            content.querySelector("#monthSelector")[month].selected = true;
            content.querySelector("#yearSelector").value = year;

            

            //The first day to be drawn in the grid
            let processingDay = new Date(year, month)
            processingDay.setDate(-processingDay.getDay() + 1)

            //loop through each day input
            content.querySelectorAll(".calendarDay label").forEach(function(day) {
                
                let text = day.children[0]
                let input = day.children[1]


                text.innerHTML = `${processingDay.getDate()}`;
                input.value = processingDay;

                //used to format days not in the current month lighter
                if (month != processingDay.getMonth()) {
                    input.classList.add("notInMonth")
                } else {
                    input.classList.remove("notInMonth")
                }

                //used to format the current day red
                if (processingDay.getFullYear() == today.getFullYear()
                    && processingDay.getMonth() == today.getMonth()
                    && processingDay.getDate() == today.getDate()) {
                        input.classList.add("today")
                } else {
                        input.classList.remove("today")
                }

                //checks the selected day 
                if (processingDay.getFullYear() == widget.selectedValues.year
                    && processingDay.getMonth() == widget.selectedValues.month -1
                    && processingDay.getDate() == widget.selectedValues.day) {
                    input.checked = true;
                } else {
                    input.checked = false;
                }

                //Apply relevant restrictions to the day
                if (widget.checkDayRestrictions(processingDay)) {
                    input.disabled = true
                } else {
                    input.disabled = false
                }
                
                //Set up value for next loop
                processingDay.setDate(processingDay.getDate() + 1)
            })
        } 

        //returns true if a given date object should be restricted by a day restriction
        //returns true if so
        widget.checkDayRestrictions = function(date) {
            //check if date is out of the min/max
            if ((widget.max instanceof Date && new Date(date.setHours(0)) > widget.max)
            || (widget.min instanceof Date && new Date(date.setHours(23)) < widget.min)) {
                return true;
            } else {
            let done = false;
            let activeDayRestrictions = widget.restrictions.day
                .filter(x => handleRestrictionPart(date.getFullYear(), x[2], "b"))
                .filter(x => handleRestrictionPart(date.getMonth() + 1, x[3], "b"))
                activeDayRestrictions.every(function(cur) {
                    if (handleRestrictionPart(date.getDate(), cur[4], cur[0]) 
                        && handleRestrictionPart(date.getDay() + 1, cur[5], cur[0]) ) {
                        done = true;
                        return false;
                    }
                    return true;
                })
                return done;
            }
        }

        //regerates the month selector
        widget.refreshMonthRestrictions = function() {
            
            let activeMonthRestrictions = widget.restrictions.month.filter(x => handleRestrictionPart(widget.currentView.year, x[2], "b"))
            content.querySelectorAll("#monthSelector option").forEach(function(curOption) {
                
                
                if (+curOption.value == widget.currentView.month) {
                    curOption.selected = true;
                }

                if ((widget.max instanceof Date && new Date(widget.currentView.year, +curOption.value - 1) > widget.max)
                    || (widget.min instanceof Date && new Date(widget.currentView.year, +curOption.value) < widget.min)) {
                        curOption.disabled = true;
                } else {
                    curOption.disabled = false;
                    activeMonthRestrictions.every(function(cur) {
                    
                        if (handleRestrictionPart(+curOption.value, cur[3], cur[0])) {
                            
                            curOption.disabled = true;
                            return false;
                        }
                        return true;
                    })
                }
            })
        }
        
        //regenerates the time selector
        widget.refreshTimeSelector = function() {

            let date = widget.currentView.day;
            if (!(date instanceof Date) || widget.checkDayRestrictions(date)) {
                content.querySelectorAll(".timeButton input").forEach(function(curOption) {
                    curOption.disabled = true;
                })
                return;
            }

            let activeHourRestrictions = widget.restrictions.hour
                .filter(x => handleRestrictionPart(date.getFullYear(), x[2], "b"))
                .filter(x => handleRestrictionPart(date.getMonth() + 1, x[3], "b"))
                .filter(x => handleRestrictionPart(date.getDate(), x[4], "b"))
                .filter(x => handleRestrictionPart(date.getDay() + 1, x[5], "b"))
            
            content.querySelectorAll(".timeButton input").forEach(function(curOption) {
                
                if ((widget.max instanceof Date && date.getFullYear() == widget.max.getFullYear() && date.getMonth() == widget.max.getMonth() && date.getDate() == widget.max.getDate() && +curOption.value > widget.max.getHours())
                || (widget.min instanceof Date  && date.getFullYear() == widget.min.getFullYear() && date.getMonth() == widget.min.getMonth() && date.getDate() == widget.min.getDate() && +curOption.value < widget.min.getHours())) {
                        curOption.disabled = true;
                } else { 
                    curOption.disabled = false;
                    activeHourRestrictions.every(function(cur) {
                        if (handleRestrictionPart(curOption.value, cur[6], cur[0])) {
                            let curHour = +curOption.value
                        
                            for (; curHour > Math.max(-1, +curOption.value - widget.period); curHour--) {
                                content.querySelectorAll(".timeButton input")[curHour].disabled = true;
                            }
                            return false;
                        }
                        return true;
                    })
                }
            })

        
            if (widget.period != 1) {
            
                //Next day disabled code
                if (widget.checkDayRestrictions(new Date(new Date(date.getTime()).setDate(date.getDate() + 1)))) {
                    for (let i = 23; i > Math.max(-1, 24 - widget.period); i--) {
                
                        content.querySelectorAll(".timeButton input")[i].disabled = true;
                    }
                } else {
                    //Next day's restrictions code
        
                    let firstRestriction = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24)
                    let found = false;
                    for (let q = 1; q <= widget.period && found == false; q++) {
                        let activeFirstRestrictions = widget.restrictions.hour
                            .filter(x => handleRestrictionPart(firstRestriction.getFullYear(), x[2], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getMonth() + 1, x[3], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getDate(), x[4], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getDay() + 1, x[5], "b"))
                        activeFirstRestrictions.every(function(cur) {    
                    
                            if (handleRestrictionPart(firstRestriction.getHours(), cur[6], cur[0])) {
                                for(let b = 23; b > Math.max(0, 23 - widget.period) + q; b--) {
                                    content.querySelectorAll(".timeButton input")[b].disabled = true;
                                }
                                found = true;
                                return false;
                            }
                            return true;
                        })
                        firstRestriction.setHours(firstRestriction.getHours() + 1)

                    }
                }
            }
        }

        //checks if a specific date object should be restricted
        //BUG: does not check if the date would be restricted for drag 
        //(IE if period is 6 and 7am is banned, times from 1-7 are restricted
        //but this function fails to check for that)
        widget.checkIfRestricted = function(date) {
            console.log("checking", date)
            //check max
            if ((widget.max instanceof Date && date > widget.max)
            || (widget.min instanceof Date  && date < widget.min)) {
                    return true
            } else {
                //check restrictions
                let activeHourRestrictions = widget.restrictions.hour
                .filter(x => handleRestrictionPart(date.getFullYear(), x[2], "b"))
                .filter(x => handleRestrictionPart(date.getMonth() + 1, x[3], "b"))
                .filter(x => handleRestrictionPart(date.getDate(), x[4], "b"))
                .filter(x => handleRestrictionPart(date.getDay() + 1, x[5], "b"))

                let result = false;
                activeHourRestrictions.every(function(cur) {
                    if (handleRestrictionPart(date.getHours(), cur[6], cur[0])) {
                        result = true;
                        return false;
                    }
                    return true;
                })
                if (result) return result
            }

            if (widget.period != 1) {
                //Next day disabled code
                if ((date.getHours() + widget.drag) > 24 && widget.checkDayRestrictions(new Date(new Date(date.getTime()).setDate(date.getDate() + 1)))) {
                    return true;
                } else {
                    let firstRestriction = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1)
                    let found = false;
                    for (let q = 1; q < widget.period && found == false; q++) {
                        let activeFirstRestrictions = widget.restrictions.hour
                            .filter(x => handleRestrictionPart(firstRestriction.getFullYear(), x[2], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getMonth() + 1, x[3], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getDate(), x[4], "b"))
                            .filter(x => handleRestrictionPart(firstRestriction.getDay() + 1, x[5], "b"))
                        activeFirstRestrictions.every(function(cur) {    
                            if (handleRestrictionPart(firstRestriction.getHours(), cur[6], cur[0])) {
                                found = true;
                                return false;
                            }
                            return true;
                    })
                    firstRestriction.setHours(firstRestriction.getHours() + 1)
                    }
                }    
            }
            return false;
        }
        
        //will disable/enable the input field associated with the calendar
        widget.active = function(bool) {
            widget["_element"].disabled = !bool;
        }

        //Given a function, will run the function every time the calendar input changed
        widget.onChange = function(func) {
            widget.onChangeFunc.push(func)
        }

        //Sets the minimum date the calendar can select
        widget.setMin = function(date) {
            if (date instanceof Date && date.valueOf()) {
                widget.min = date
            } else {
                widget.min = null
            }

            widget.refreshMonthRestrictions()
            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()
        }

        //Sets the maximum date the calendar can select
        widget.setMax = function(date) {
            if (date instanceof Date && date.valueOf()) {
                widget.max = date
            } else {
                widget.max = null
            }

            widget.refreshMonthRestrictions()
            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()
        }

        //Sets the time period which the selected time has to adhere to (a period of 6 would restrict 1am-7am if 7am was banned)
        widget.setPeriod = function(period) {
            if (typeof period == "number") {
                widget.period = period
            } else {
                widget.period = 1;
            }

            widget.refreshMonthRestrictions()
            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()
        }

        //Given restrictions in the form of (type)(year)(month)(date)(day)(hour), add restrictions to the calendar
        widget.updateRestrictions = function(...rawRestrictions) {
            let restrictions = parseRestrictions(rawRestrictions.flat())
            restrictions.forEach(function(cur) {
                switch (cur[1]) {
                    case "y":
                        widget["restrictions"]["year"].push(cur)
                        break;
                    case "m":
                        widget["restrictions"]["month"].push(cur)
                        break;    
                    case "d":
                        widget["restrictions"]["day"].push(cur)
                        break;
                    case "t":
                        widget["restrictions"]["hour"].push(cur)
                        break;
                    default:
                        console.log("bad restriction: ", cur)
                }
            })

            widget.refreshMonthRestrictions()
            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()
        }

        //FInds the nearest future restirction to a given date (not including drag or max)
        widget.findNearestRestriction = function(date) {
            // return false;
            let restrictions = Object.values(widget.restrictions).flat()
            //console.log("find nearest", date)
            let monthDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours())
            let answer = null;
            let count = 0;

            while (restrictions.length > 0 && answer == null) {
                //console.log("monthDay", monthDate)
                restrictions = restrictions.filter(cur => (cur[2].length == 0) || ((cur[2].length == 1 && date.getFullYear() < cur[2][0]) || (cur[2].length == 2 && date.getFullYear() < cur[2][1])))
                //console.log(restrictions)
                let curYearRestrictions = restrictions.filter(cur => (handleRestrictionPart(monthDate.getFullYear(), cur[2], "b")))
                curYearRestrictions.every(function(cur) {
                    //console.log(cur, monthDate.getMonth())
                    if (handleRestrictionPart(monthDate.getMonth() + 1, cur[3], "b")) {

                        let dayDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), monthDate.getDate(), monthDate.getHours())
                        //console.log("dayDate", dayDate)
                        while (dayDate.getMonth() == monthDate.getMonth()) {
                            //console.log(dayDate.getDate(), cur[4])
                            //console.log(dayDate.getDay() + 1, cur[5])
                            if (handleRestrictionPart(dayDate.getDate(), cur[4], "b") 
                                && handleRestrictionPart(dayDate.getDay() + 1, cur[5], "b")) {

                                let timeDate = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate(), dayDate.getHours())
                                //console.log("timeDate", timeDate)
                                while (timeDate.getDate() == dayDate.getDate()) {
                                    //console.log(timeDate.getHours(), cur[6])
                                    if (handleRestrictionPart(timeDate.getHours(), cur[6], cur[0])) { 
                                        //console.log("pass")
                                        answer = timeDate
                                        return false;
                                    } else {
                                        timeDate.setHours(timeDate.getHours() + 1)
                                    }

                                }
                            }
                            dayDate.setHours(0)
                            dayDate.setDate(dayDate.getDate() + 1)
                            }
                        return true;
                    } else {
                        return true;
                    }
                })
                monthDate.setDate(1)
                monthDate.setHours(0)
                monthDate.setMonth(monthDate.getMonth() + 1)
                count++
            }

            return answer;
        }

    //Set up event listeners for each button
        //Handles clicking an arrow button      
        content.querySelectorAll(".calendarArrow").forEach(function(cur) {
            cur.addEventListener("click", function() {

                let month = widget.currentView.month - ((cur.id == "increaseCalendarMonth") ? -1 : 1) ; 

                if (month == 0) { 
                    widget.currentView.month = 12;
                    widget.currentView.year--;
                    widget.refreshMonthRestrictions()
                } else if (month == 13) {
                    widget.currentView.month = 1
                    widget.currentView.year++;
                    widget.refreshMonthRestrictions()
                } else {
                    widget.currentView.month = month
                }

                widget.refreshCalendar()

            });
        });

        //Handles clicking a day
        content.querySelectorAll(".calendarDay input").forEach(function(cur) {
            cur.addEventListener("change", function() {
                
                let dateChosen = new Date(this.value)

                widget.selectedValues.year = dateChosen.getFullYear();
                widget.selectedValues.month = dateChosen.getMonth() + 1;
                widget.selectedValues.day = dateChosen.getDate();
                
                widget.currentView.year = dateChosen.getFullYear()
                widget.currentView.month = dateChosen.getMonth() + 1;
                widget.currentView.day = dateChosen;

                widget.refreshMonthRestrictions()
                widget.refreshCalendar()
                widget.refreshTimeSelector()
                widget.refreshInput()
                

            })
        });    

        //Handles selecting a month through the select menu
        content.querySelector("#monthSelector").addEventListener("input", function() {

            widget.selectedValues.month = +this.value;
            widget.currentView.month = +this.value;

            if (widget.currentView.day instanceof Date) {
                widget.currentView.year = widget.currentView.day.getFullYear()
                widget.currentView.day.setMonth(this.value - 1)
            }

            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()

        });
                
        //handles selecting a year through the number input
        content.querySelector("#yearSelector").addEventListener("change", function() {

            widget.selectedValues.year = +this.value;

            widget.currentView.year = +this.value;

            if (widget.currentView.day instanceof Date) {
                widget.currentView.month = widget.currentView.day.getMonth() + 1
                widget.currentView.day.setYear(this.value)
            }

            widget.refreshMonthRestrictions()
            widget.refreshCalendar()
            widget.refreshTimeSelector()
            widget.refreshInput()
        });


        //handles clicking a time on the time display
        content.querySelectorAll(".timeButton input").forEach(function(cur) {
            cur.addEventListener("change", function() {
                widget.selectedValues.hour = this.value;
                widget.refreshInput()
                widget.hide()
            });
        });   

        //Handles opening the widget
        widget["_element"].addEventListener('show.bs.popover', async function() {      
            
        })


    widget.refreshCalendar()
    widget.refreshTimeSelector()
    widget.refreshInput()
    return widget;
};

//converts a list of (type)(year)(month)(date)(day)(hour) restrictions to ones readable by the calendar
//which are restrictions in the form of a list of [[type][year][month][date][day][hour]]
function parseRestrictions(restrictions) {
    let result = []
    restrictions.forEach(restrction => {
        let restrictionParts = [...restrction.matchAll(/\((.*?)\)/gm)]
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

                if (restrictionPartValue) {
                    realTarget = potTarget;
                }
                formatedRestriction.push((restrictionPartValue) ? restrictionPartValue : [])
            }

            formatedRestriction.splice(1, 0, realTarget)   
            result.push(formatedRestriction)

        } 
    });
    return result;
}

//Logic for handling a singular restriction part like [2000, 2020]
//Returns true if the given value should be restricted and flase if it shouldn't
function handleRestrictionPart(realValue, part, type) {

    if (type == "w") {
        if (part.length == 0) {
            return true
        } else if (part.length == 1) {
            return realValue != +part[0]
        } else if (part.length == 2) {
            return (realValue < +part[0] || realValue > +part[1])
        } else {
            console.log("bad restriction part", part)
        }
    } else if (type == "b") {
        if (part.length == 0) {
            return true
        } else if (part.length == 1) {
            return realValue == +part[0]
        } else if (part.length == 2) {
            return (realValue >= +part[0] && realValue <= +part[1])
        } else {
            console.log("bad restriction part", part)
        }
    } else {
        widget.rip()
    }
}