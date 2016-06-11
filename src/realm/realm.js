import Realm from 'realm';

class UserInfo extends Realm.Object {}
UserInfo.schema = {
    name: 'UserInfo',
    primaryKey: 'single',
    properties: {
        jwtToken: 'string',
        single: {type: 'string', default: 'single'}
    },
};

export default new Realm({schema: [UserInfo]});
