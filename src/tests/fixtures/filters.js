import moment from "moment"

const filters = {
    text : '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
}

const altFilters = {
    text : 'bilss', 
    sortBy: 'amount', 
    startDate: moment(0).add(3, 'days'), 
    endDate: moment(0).add(3, 'days')
}

export { filters, altFilters}