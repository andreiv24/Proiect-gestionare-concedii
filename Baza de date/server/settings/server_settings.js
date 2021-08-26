import parseEnv from './parseEnv';

export default {
    developerMode: parseEnv('DEVELOPER_MODE'),
    host: parseEnv('HOST'),
    port: parseEnv('PORT'),
    dbConnectionUri: parseEnv('DB_CONNECTION_URI'),
    paginateDefault: parseEnv('PAGINATE_DEFAULT'),
    paginateMax: parseEnv('PAGINATE_MAX')
}