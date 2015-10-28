import * as force from 'forcejs';

export let findAll = () => force.query(
        `SELECT Id, Name, Title, Phone, MobilePhone, Email
        FROM Contact LIMIT 20`);

export let findByName = (name) => force.query(
        `SELECT Id, Name, Title, Phone, MobilePhone, Email
        FROM Contact WHERE name LIKE '%${name}%' LIMIT 50`);