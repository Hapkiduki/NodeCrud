const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer', (err, customers)=>{
            if (err) {
                res.json(err);
            }
            
            res.render('customer', {
                data: customers
            });
        });
    });
};

controller.store = (req, res)=>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO customer SET ?', [data], (err, customer)=>{
            if (err) {
                res.json(err);
            }
            
            res.redirect('/');
        });
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer WHERE id = ?',[id], (err, customer)=>{
            if (err) {
                res.json(err);
            }
            
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const request = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE customer SET ? WHERE id = ?',[request, id], (err, customer)=>{
            if (err) {
                res.json(err);
            }
            
            res.redirect('/');
        });
    });
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, customer)=>{
            if (err) {
                res.json(err);
            }
            
            res.redirect('/');
        });
    });
};

module.exports = controller;