
const container = (theme) => ({
    maxWidth: "1560px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("xl")]: {
        maxWidth: "85%",
    },
    [theme.breakpoints.down("lg")]: {
        maxWidth: "90%",
    },
    [theme.breakpoints.up(1740)]: {
        maxWidth: "1450px",
    },
});
const inputField = (theme) => ({
    "& .MuiInputBase-root": {
        borderRadius: "0.625rem",
        [theme.breakpoints.down("xl")]: {
            borderRadius: "0.5rem",
        },
    },
    "& .MuiFormLabel-root": {
        color: " #727272 ",
        fontFamily: "'Karla', sans-serif",
        fontSize: "1.625rem",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        top: "0.125rem",
        "&.MuiInputLabel-shrink": {
            background: " #fff",
            paddingRight: "0.188rem",
        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "1.125rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },
    "& input": {
        color: " #727272 ",
        fontFamily: "'Karla', sans-serif",
        fontSize: "1.625rem",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        [theme.breakpoints.down("xl")]: {
            fontSize: "1.125rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            height: "1.25rem",
        },
    },
    "& .MuiSelect-select": {
        color: " #727272 ",
        fontFamily: "'Karla', sans-serif",
        fontSize: "1.625rem",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        textAlign: "left",
        [theme.breakpoints.down("xl")]: {
            fontSize: "1.125rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },
});
const labelBg = () => ({
    "& .MuiInputLabel-formControl": {
        "&.MuiInputLabel-shrink": {
            background: " #fff",
            paddingRight: "0.188rem",
        },
    },
});
const sliderBtnStyle = () => ({
    "& .swiper ": {
        "& .swiper-button-prev, & .swiper-button-next ": {
            background: "#FFF3CB",
            width: "2.9375rem",
            height: "3rem",
            borderRadius: "0.313rem",
            "&:after": {
                fontSize: "1.5rem",
                color: "#1E1E1C",
            },
        },
    },
});
const sliderBtnOutside = (theme) => ({
    background: "#FFF3CB",
    width: "2.9375rem",
    height: "3rem",
    borderRadius: "0.313rem",
    position: "absolute",
    color: "#1E1E1C",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    minWidth: "inherit",
    "&:hover": {
        background: "#FFF3CB",
    },
    [theme.breakpoints.down("lg")]: {
        width: "2.125rem",
        height: "2.125rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "1.75rem",
        height: "1.75rem",
    },
});
const PrevBtn = (theme) => ({
    left: "-5rem",
    [theme.breakpoints.down("lg")]: {
        left: "-3rem",
    },
    [theme.breakpoints.down("sm")]: {
        left: "-1rem",
    },
});
const NextBtn = (theme) => ({
    right: "-5rem",
    [theme.breakpoints.down("lg")]: {
        right: "-3rem",
    },
    [theme.breakpoints.down("sm")]: {
        right: "-1rem",
    },
});
const title = (theme) => ({
    color: "#1E1E1C",
    fontFamily: "'Karla', sans-serif",
    fontSize: "2.1875rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    flex: 1,
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.875rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.25rem",
    },
});
const subTitle = (theme) => ({
    color: "#727272",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    mb: 1,
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.25rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.125rem",
    },
});
const calendarSmallStyle = () => ({
    "& .fc-header-toolbar": {
        flexWrap: "wrap",
        "& button": {
            p: 0,
            pl: 0.5,
            pr: 0.5,
            background: "transparent",
            color: "#2599fa",
            borderColor: "#2599fa",
            "&:last-child": {
                background: "transparent",
                color: "#2599fa",
                opacity: 1,
                textTransform: "capitalize",
            },
            "&.fc-button-active": {
                background: "transparent!important",
                color: "#2599fa!important",
                border: "1px solid #2599fa!important",
                pl: 0.5,
                pr: 0.5,
                textTransform: "capitalize",
            },
        },
        "& .fc-toolbar-chunk": {
            mt: 1,
        },
        "& .fc-toolbar-title": {
            fontSize: "1.125rem",
        },
    },
});
const calenderStyle = (theme) => ({
    "& .fc-header-toolbar": {
        flexWrap: "wrap",
        "& .fc-toolbar-chunk": {
            m: 0,
            mb: 1 / 2,
            "&:nth-of-type(2)": { ml: "auto" },
            "&:nth-of-type(3)": {
                display: "flex",
                alignItems: "center",
                "& .fc-toolbar-title": {
                    margin: "0 0.5rem",
                },
            },
            "& .fc-toolbar-title": {
                color: "#1E1E1C",
                fontFamily: "'Karla', sans-serif",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                // ml: "0!important",
                [theme.breakpoints.down("lg")]: {
                    fontSize: "1.25rem",
                },
                [theme.breakpoints.down("sm")]: {
                    fontSize: "1rem",
                },
            },
        },
        "& .fc-prev-button, & .fc-next-button": {
            height: 56,
            width: 56,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            "& .fc-icon": {
                fontSize: 23
            }
        },
        "& .fc-button-primary": {
            background: "#fff!important",
            color: "#1E1E1C!important",
            borderRadius: "1.875rem!important",
            padding: "0.563rem",
            margin: "0 0.625rem 0 0!important",
            textTransform: "capitalize",
            borderColor: "#2599FB",
            fontSize: "1.5rem",
            fontFamily: "'Karla', sans-serif",
            fontWeight: 500,
            "&:focus": {
                boxShadow: "none",
            },
            "&:hover": {
                color: "#1E1E1C",
                background: "#fff",
            },
            "&:disabled": {
                background: "#fff",
                color: "#727272",
            },
            "&:active": {
                "&:focus": { boxShadow: "none" },
            },
            [theme.breakpoints.down("lg")]: {
                fontSize: "1.25rem",
            },
            [theme.breakpoints.down("sm")]: {
                padding: "0.188rem 0.35rem",
            },
        },
        "& .fc-pageTitle-button": {
            border: "none",
            borderRadius: "0!important",
            color: "#000 !important",
            fontFamily: "'Karla', sans-serif",
            fontSize: "2.1875rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            padding: 0,
            boxShadow: "none",
            cursor: "auto",
            [theme.breakpoints.down("xl")]: {
                fontSize: "1.625rem",
            },
            [theme.breakpoints.down("lg")]: {
                fontSize: "1.375rem",
            },
        },
    },
    "& .fc .fc-timegrid-slot": {
        padding: "7px 0 7px 0",
        fontWeight: "400",
        color: "#1E1E1C",
        fontSize: "1.125rem",
        lineHeight: "120%",
        alignSelf: "center",

        [theme.breakpoints.down("lg")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.875rem",
        },
    },
    "& .fc-timegrid": {
        "& .fc-scroller": {
            overflow: "hidden!important",
        },
    },
    "& .fc .fc-scroller-liquid-absolute": {
        overflow: "hidden!important",
        position: "relative",
    },
});
const bookingHints = () => ({
    position: "absolute",
    bottom: 0,
    background: "#fff",
    zIndex: 2,
    padding: "0.875rem 1.375rem",
    width: "100%",
    left: 0,
});
const noDataFound = (theme) => ({
    color: "#f95959",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.125rem",
    },
});
const calendarDayNum = (theme) => ({
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "150%",
    // color: "#727272",
    color: "#000000",
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
});

const calendarDay = (theme) => ({
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "150%",
    color: "#000000",
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
});

const newCalstyles = (theme) => ({
    "& .fc-day-today": {
        position: "relative",

        background: "url('../images/calendarTodayBg.png') center center no-repeat",
        backgroundSize: "cover",
    },
    "& .fc-header-toolbar": {
        // position: "sticky",
        // top: 0,
        // zIndex: 2,
        // background: "#fff",
        "& .fc-button-primary": {
            "&.fc-myCustomCenterButton-button": {
                background:
                    "url(../images/db_TodayIcon.png) 14px center  no-repeat!important",
                paddingLeft: "3.5rem!important",
                [theme.breakpoints.down("lg")]: {
                    paddingTop: "5px!important",
                    paddingBottom: "5px!important",
                    paddingRight: "10px!important",
                },
            },
            "&.fc-today-button": {
                background:
                    "url(../images/db_TodayIcon.png) 14px center  no-repeat!important",
                paddingLeft: "3.5rem!important",
                [theme.breakpoints.down("lg")]: {
                    paddingTop: "5px!important",
                    paddingBottom: "5px!important",
                    paddingRight: "10px!important",
                },
            },
            [theme.breakpoints.down("lg")]: {
                padding: "2px!important",
            },
        },
        "& .fc-toolbar-chunk": {
            "& .pageTxtTitle": {
                fontFamily: "'Karla', sans-serif",
                fontSize: "2.188rem",
                fontWeight: 500,
                color: "#000",
                [theme.breakpoints.down("lg")]: {
                    fontSize: "1.5rem",
                },
            },
            "&:nth-of-type(2)": {
                margin: "auto",
            },
        },
    },
    "& .fc-timegrid-axis-frame": {
        ".timeZone_txt": {
            fontWeight: 400,
            lineHeight: "125%",
            fontSize: "1.1rem",
            color: "#333333",
            paddingTop: "30px",
            background: "url(../images/errorIcon.png)top center  no-repeat",
            [theme.breakpoints.down("lg")]: {
                fontSize: "1.125rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.875rem",
            },
        },
    },
    "& colgroup > col": {
        width: "140px!important",
        [theme.breakpoints.down("lg")]: {
            width: "110px!important",
        },
        [theme.breakpoints.down("sm")]: {
            width: "85px!important",
        },
    },
    "& .fc-timegrid": {
        height: "535px",
        overflowY: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        border: "1px solid #ddd",
        borderRadius: "1.5rem",
        borderTopWidth: "2px",
        borderBottomWidth: "2px",
        [theme.breakpoints.down("lg")]: {
            height: "400px",
        },
    },
    "& .fc-scrollgrid > thead": {
        position: "sticky",
        top: "0",
        zIndex: 2,
        background: "#fff",
        th: {
            verticalAlign: "middle",
            height: "90px",
            [theme.breakpoints.down("lg")]: {
                height: "70px",
            },
        },
    },
    "& .fc-scrollgrid-shrink-cushion": {
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: "150%",
        color: "#333333",
        [theme.breakpoints.down("lg")]: {
            fontSize: "18px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
    "& .fc-direction-ltr .fc-timegrid-slot-label-frame": {
        textAlign: "center",
    },
    "& .fc .fc-timegrid-slot": {
        height: "62px",
        background: "#F0F0F0",
        borderColor: "#fff",
        [theme.breakpoints.down("lg")]: {
            height: "40px",
        },
    },
    "&  .fc .fc-timegrid-slot-label": {
        background: "#fff",
        borderColor: "#F0F0F0",
    },
    ".fc-timegrid-event-harness > .fc-timegrid-event": {
        m: 0,
    },
});
const itemList = (theme) => ({
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#727272",
    display: "flex",
    alignItems: "center",
    ml: "0!important",
    mr: "1rem!important",
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
    },
});
export const styles = {
    container: container,
    inputField: inputField,
    labelBg: labelBg,
    sliderBtnStyle: sliderBtnStyle,
    sliderBtnOutside: sliderBtnOutside,
    PrevBtn: PrevBtn,
    NextBtn: NextBtn,
    title: title,
    subTitle: subTitle,
    calendarSmallStyle: calendarSmallStyle,
    calenderStyle: calenderStyle,
    bookingHints: bookingHints,
    noDataFound: noDataFound,
    newCalstyles: newCalstyles,
    calendarDayNum: calendarDayNum,
    calendarDay: calendarDay,
    itemList,
};
