import {computed} from "vue";

export const themeConfig = computed(() => {
    const radiusPx = 5
    return {
        token: {
            colorPrimary: '#171717',
            colorInfo: '#171717',
            colorSuccess: '#16a34a',
            colorWarning: '#f59e0b',
            colorError: '#dc2626',
            colorTextBase: '#171717',
            colorBgBase: '#ffffff',
            colorBgLayout: '#fafafa',
            colorBorder: '#e5e5e5',
            borderRadius: radiusPx,
            controlOutline: 'none'
        },
        components: {
            Button: {
                borderRadius: radiusPx,
                // controlHeight: 36
                boxShadow:"none",
                primaryShadow: 'none',
            },
            Card: {
                borderRadiusLG: radiusPx
            },
            Select: {
                optionSelectedBg: "#f5f5f5",
                optionActiveBg: "#f5f5f5"
            },
            DatePicker: {
                cellActiveWithRangeBg: '#f5f5f5',
                cellHoverWithRangeBg: '#fafafa',
                cellRangeBorderColor: '#e5e5e5',
                cellActiveWithRangeColor: '#171717'
            },
            Table: {
                headerBg: '#f9fafb',
                headerColor: '#171717',
                // borderColor: '#f9fafb',
                headerFontSize: 13,
                headerPadding: '10px 16px',
                headerBorderRadius:"3px",
                cellPaddingBlock: 10,
                cellPaddingInline: 16,

                rowHoverBg: '#fafafa'
            }
        }
    }
})