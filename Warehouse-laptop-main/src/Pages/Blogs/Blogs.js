import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1) What is the difference between javascript and nodejs ?</Accordion.Header>
          <Accordion.Body>
          Javascript is a <strong> pragramming language</strong> but Node js
              is a <strong> runtime environment </strong> for javacript.
              Javascript can only run in <strong>browser </strong> but with the
              help of node js we can run javascript in <strong> server.</strong>{" "}
              Javascript Mostly Used in <strong> client side</strong> but Node
              js is Mostly Used in <strong> server side. </strong>. Javascript
              is the updated version of <strong>ECMA script</strong> and written
              in c++. but Node js is{" "}
              <strong> written in c,c++,javascript.</strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> 2) When should you use nodejs and when should you use mongodb ?</Accordion.Header>
          <Accordion.Body>
          There is many aspects to use node js .{" "}
              <strong>
                1) when we want to maintain same stack in client and server
                side.
              </strong>{" "}
              <strong>2) when application show real time data.</strong>
              <strong>
                3) when you need to access help of big package manager like npm
              </strong>
            
            
              ** There is many aspects to use mongodb.
              <strong> 1) when your data is Document Oriented </strong>
              <strong>
                {" "}
                2) when you want a good performance and scalability.
              </strong>
              <strong>
                {" "}
                3) when you want a data format in json and no join.
              </strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3) what is the differences between sql and nosql databases ?</Accordion.Header>
          <Accordion.Body>
          Sql is <strong>relational database management system. </strong>{" "}
              Nosql is{" "}
              <strong>non relational database management system. </strong>
              Sql has <strong>fixed schema</strong>. But Nosql has{" "}
              <strong>dynamic schema.</strong> Sql is not suited for{" "}
              <strong>hierarchical data storage</strong>. But Nosql is{" "}
              <strong>suited.</strong> Sql is{" "}
              <strong>Vertically scalable.</strong> But Nosql is{" "}
              <strong>Horizontally scalable.</strong>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blogs;