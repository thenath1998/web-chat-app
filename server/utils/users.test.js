const expect = require('expect');
const {
    Users
} = require('./users');

describe('User', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'node'
        }, {
            id: '2',
            name: 'John',
            room: 'react'
        }, {
            id: '3',
            name: 'Julie',
            room: 'node'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Sumon',
            room: 'lyadh'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should find a user', () => {
        var id = '1';
        var resUser = users.getUser(id);
        expect(resUser.id).toBe(id);
    });

    it('should not find a user', () => {
        var id = '99';
        var resUser = users.getUser(id);
        expect(resUser).toNotExist();
    });

    it('should remove a user', () => {
        var id = '1';
        var resUser = users.removeUser(id);
        expect(resUser.id).toBe(id);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var id = '4';
        var resUser = users.removeUser(id);
        
        expect(resUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should return names for node room', ()=>{
        var userList = users.getUserList('node');
        expect(userList).toEqual(['Mike','Julie']);
    });

    it('should return names for react room', ()=>{
        var userList = users.getUserList('react');
        expect(userList).toEqual(['John']);
    });
});