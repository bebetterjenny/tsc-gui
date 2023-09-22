
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
  } from '@mui/x-data-grid-generator';

export const mockCases = [
    {
        taskId: "12301",
        tscAdministratorId: "21302",
        navigatorId: "314",
        taskProgressEnum: "START", //START, IN_PROGRESS, COMPLETED
        consenus: ['consent1.pdf', 'consent2.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12302",
        tscAdministratorId: "21304",
        navigatorId: "313",
        taskProgressEnum: "START",
        consenus: [], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12303",
        tscAdministratorId: "21302",
        navigatorId: "315",
        taskProgressEnum: "IN_PROGRESS",
        consenus: ['consent1.pdf', 'consent2.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12304",
        tscAdministratorId: "21303",
        navigatorId: "312",
        taskProgressEnum: "COMPLETED",
        consenus: ['consent1.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12305",
        tscAdministratorId: "21305",
        navigatorId: "311",
        taskProgressEnum: "COMPLETED",
        consenus: [], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12306",
        tscAdministratorId: "21301",
        navigatorId: "311",
        taskProgressEnum: "IN_PROGRESS",
        consenus: ['consent2.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12307",
        tscAdministratorId: "21302",
        navigatorId: "314",
        taskProgressEnum: "START",
        consenus: [], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12308",
        tscAdministratorId: "21304",
        navigatorId: "313",
        taskProgressEnum: "START",
        consenus: ['consent1.pdf', 'consent3.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12309",
        tscAdministratorId: "21302",
        navigatorId: "315",
        taskProgressEnum: "IN_PROGRESS",
        consenus: ['consent1.pdf', 'consent2.pdf', 'consent3.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12310",
        tscAdministratorId: "21303",
        navigatorId: "312",
        taskProgressEnum: "COMPLETED",
        consenus: [],
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12311",
        tscAdministratorId: "21305",
        navigatorId: "311",
        taskProgressEnum: "COMPLETED",
        consenus: [], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    },
    {
        taskId: "12312",
        tscAdministratorId: "21301",
        navigatorId: "311",
        taskProgressEnum: "IN_PROGRESS",
        consenus: ['consent1.pdf', 'consent2.pdf'], 
        appointment: {
            time: "2023 Oct 2nd 10:00 AM",
            url: ''
        }
    }
]