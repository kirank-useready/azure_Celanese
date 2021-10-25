var Config = {
    /*Rest Server Url*/
    account: 'celanese-celanytics.privatelink',
    username: 'SVC_MFG_CTRLTWR_APP',
    password: 'A$KB6uDV+=CS',
    host: 'https://amac1ca1appd1.sw.czds.bz:8443/',
	database:'ANALYTICS',
    role:'DATA_DEVELOPER_MFG',
    warehouse: 'DATA_DEVELOPER_MFG_WH',
    fetchtdata: 'select * from "ANALYTICS"."MFG_CURATED"."V_PI_UTIL_UNITSTATUS"',
    SSL_CRT:'./../SSL/AMAC1CA1APPD1.sw.czds.bz.cer',
    SSL_KEY:'./../SSL/AMAC1CA1APPD1.sw.czds.bz.key',
    SSL_CHAINKEY:'./../SSL/AMAC1CA1APPD1.sw.czds.bz.UTF8.cer'
    }
    module.exports = {Config};