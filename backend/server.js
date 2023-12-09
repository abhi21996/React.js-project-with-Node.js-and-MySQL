import express from 'express';
import mysql from 'mysql'
import multer from 'multer';
import path from 'path';
import formidable, { errors as formidableErrors } from 'formidable';
import fs from 'fs';
import cors from 'cors'

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Adjust the path as needed
    },
    filename: function (req, file, cb) {
        const fileName = file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop();
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// Example for serving static files in Express
app.use('/uploads', express.static('uploads'));


//creating connection with database
const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "",
    database: 'assignproject',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});


app.get('/', (req, res) => {
    const sql = "SELECT * FROM 	test";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/viewteacher', (req, res) => {
    const sql = "SELECT * FROM 	teacher";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/standards', (req, res) => {
    const sql = "SELECT * FROM 	standards";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/teachers', (req, res) => {
    const sql = "SELECT * FROM teacher";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/events', (req, res) => {
    const sql = "SELECT * FROM events";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});


app.get('/viewevents', (req, res) => {
    const sql = "SELECT * FROM events";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/viewresults', (req, res) => {
    const sql = "SELECT * FROM results";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/students/:id', (req, res) => {
    const sql = "SELECT * FROM test WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/events/:id', (req, res) => {
    const sql = "SELECT * FROM events WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/standards/:id', (req, res) => {
    const sql = "SELECT * FROM standards WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/divisions/:id', (req, res) => {
    const sql = "SELECT * FROM division WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/teachers/:id', (req, res) => {
    const sql = "SELECT * FROM teacher WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/events/:id', (req, res) => {
    const sql = "SELECT * FROM events WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/getresults/:id', (req, res) => {
    const sql = "SELECT * FROM results WHERE id = ?";
    const id = req.params.id;
    // Execute the SQL query
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.put('/students/:id', upload.fields([
    { name: 'Profile_Picture', maxCount: 1 },
    { name: 'Aadhar_Card', maxCount: 1 },
    { name: 'Birth_Certificate', maxCount: 1 },
]), (req, res) => {
    let profilePicturePath;
    let aadharCardPath; 
    let birthCertificatePath;

    let profilePicturePath1;
    let aadharCardPath1;
    let birthCertificatePath1;

console.log("files", req.files)



    if(Object.keys(req.files).length !== 0){                              //<---to check empty object(error occuring cannot read properties of undefined solution)


    profilePicturePath = req.files['Profile_Picture'][0].originalname;
    aadharCardPath = req.files['Aadhar_Card'][0].originalname;
    birthCertificatePath = req.files['Birth_Certificate'][0].originalname;

     profilePicturePath1 = `http://localhost:4008/uploads/${profilePicturePath}`;
     aadharCardPath1 = `http://localhost:4008/uploads/${aadharCardPath}`;
     birthCertificatePath1 = `http://localhost:4008/uploads/${birthCertificatePath}`;
    }
    else{
        profilePicturePath1 = req.body.Profile_Picture;
        aadharCardPath1 = req.body.Aadhar_Card;
        birthCertificatePath1 = req.body.Birth_Certificate;

    }
    console.log("profilepicture:", profilePicturePath);

   

    //     const profilePicturePath = req.files['Profile_Picture'] ? req.files['Profile_Picture'][0].filename : null;
    //   const aadharCardPath = req.files['Aadhar_Card'] ? req.files['Aadhar_Card'][0].filename : null;
    //   const birthCertificatePath = req.files['Birth_Certificate'] ? req.files['Birth_Certificate'][0].filename : null;

    //   const profilePictureURL = profilePicturePath ? `http://localhost:4008/uploads/${profilePicturePath}` : null;
    //   const aadharCardURL = aadharCardPath ? `http://localhost:4008/uploads/${aadharCardPath}` : null;
    //   const birthCertificateURL = birthCertificatePath ? `http://localhost:4008/uploads/${birthCertificatePath}` : null;

    const values = [
        profilePicturePath1,
        req.body.First_Name,
        req.body.Middle_Name,
        req.body.Last_Name,
        req.body.DOB,
        req.body.Place_of_Birth,
        req.body.Blood_Group,
        req.body.Gender,
        req.body.Cast,
        req.body.Nationality,
        req.body.Religion,
        req.body.student_contact_no,
        req.body.student_email_address,
        req.body.Parent_Name,
        req.body.Occupation,
        req.body.Annual_salary,
        req.body.parent_contact_no,
        req.body.parent_email_address,
        req.body.Current_Address,
        req.body.Current_Address_City,
        req.body.Current_Address_District,
        req.body.Current_Address_State,
        req.body.Current_Address_Pin_Code,
        req.body.Permanant_Address,
        req.body.Permanant_Address_City,
        req.body.Permanant_Address_District,
        req.body.Permanant_Address_State,
        req.body.Permanant_Address_Pincode,
        req.body.Last_School_Attended,
        req.body.Year_Of_Passing,
        aadharCardPath1,
        birthCertificatePath1,
        req.params.id // Assuming id is a parameter in the URL
    ];

    const sql = `
    UPDATE test 
    SET 
      Profile_Picture=?,
      First_Name=?,
      Middle_Name=?,
      Last_Name=?,
      DOB=?,
      Place_of_Birth=?,
      Blood_Group=?,
      Gender=?,
      Cast=?,
      Nationality=?,
      Religion=?,
      student_contact_no=?,
      student_email_address=?,
      Parent_Name=?,
      Occupation=?,
      Annual_salary=?,
      parent_contact_no=?,
      parent_email_address=?,
      Current_Address=?,
      Current_Address_City=?,
      Current_Address_District=?,
      Current_Address_State=?,
      Current_Address_Pin_Code=?,
      Permanant_Address=?,
      Permanant_Address_City=?,
      Permanant_Address_District=?,
      Permanant_Address_State=?,
      Permanant_Address_Pincode=?,
      Last_School_Attended=?,
      Year_Of_Passing=?,
      Aadhar_Card=?,
      Birth_Certificate=?
    WHERE id=?`;

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("error:", err.message, err);
            return res.json({ Message: err.message });
        }
        console.log("result :", result);
        return res.json(result);
    });

});


app.put('/events/:id', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
]), (req, res) => {

    const image1Path = req.files['image1'][0].originalname;
    const image2Path = req.files['image2'][0].originalname;
    const image3Path = req.files['image3'][0].originalname;

    const image1Path1 = `http://localhost:4008/uploads/${image1Path}`;
    const image2Path1 = `http://localhost:4008/uploads/${image2Path}`;
    const image3Path1 = `http://localhost:4008/uploads/${image3Path}`;

    const values = [
        req.body.eventTitle,
        req.body.eventDescription,
        req.body.eventCategory,
        req.body.eventDateTime,
        req.body.eventDuration,
        req.body.venue,
        image1Path1,
        image2Path1,
        image3Path1,
        req.params.id // Assuming id is a parameter in the URL
    ];

    const sql = `UPDATE events SET eventTitle=?,eventDescription=?,eventCategory=?,eventDateTime=?,eventDuration=?,venue=?,image1=?,image2=?,image3=? WHERE id=?`;

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("error:", err.message, err);
            return res.json({ Message: err.message });
        }
        console.log("result :", result);
        return res.json(result);
    });

});



app.put('/teachers/:id', upload.fields([
    { name: 'Profile_Picture', maxCount: 1 },
    { name: 'id_Proof', maxCount: 1 },
]), (req, res) => {

    try {
        const profilePictureFile = req.files['Profile_Picture'];
        const idProofFile = req.files['id_Proof'];

        if (!profilePictureFile || !idProofFile) {
            throw new Error('Profile_Picture or id_Proof file not provided');
        }

    const profilePicturePath = req.files['Profile_Picture'][0].originalname;
    const idProofPath = req.files['id_Proof'][0].originalname;

    const profilePicturePath1 = `http://localhost:4008/uploads/${profilePicturePath}`;
    const idProofPath1 = `http://localhost:4008/uploads/${idProofPath}`;

    const values = [
        profilePicturePath1,
        req.body.first_name,
        req.body.Last_Name,
        req.body.DOB,
        req.body.Gender,
        req.body.Address,
        req.body.Contact_number,
        req.body.Email,
        req.body.Qualification,
        req.body.Specialization,
        req.body.Experience,
        req.body.Joining_Date,
        idProofPath1,
        req.body.Position_of_joining,
        req.params.id // Assuming id is a parameter in the URL
    ];

    const sql = `UPDATE teacher SET Profile_Picture=?,first_name=?,Last_Name=?,DOB=?,Gender=?,Address=?,Contact_number=?,Email=?,Qualification=?,Specialization=?,Experience=?,Joining_Date=?,id_Proof=?,Position_of_joining=? WHERE id=?`;

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("error:", err.message, err);
            return res.json({ Message: err.message });
        }
        console.log("result :", result);
        return res.json(result);
    });
} catch (error) {
    console.error('Error processing request:', error.message);
    return res.json({ Message: error.message });
}

});


app.put('/standards/:id', (req, res) => {
    const sql = 'UPDATE standards SET `Standard_Name`=?, `Academic_Year`=?, `medium`=?, `max_students`=? WHERE id=?';
    const id = req.params.id;
    db.query(sql, [req.body.Standard_Name, req.body.Academic_Year, req.body.medium, req.body.max_students, id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.put('/updateresults/:id', (req, res) => {
    console.log("line429");
    const sql = 'UPDATE results SET `Student_full_name`=?, `select_standard`=?, `select_division`=?, `select_medium`=?, `select_exam`=?,`physics`=?,`chemistry`=?,`biology`=?,`english`=?,`marathi`=?,`maths`=?,`total_marks`=?,`status`=?WHERE id=?';
    const id = req.params.id;
    db.query(sql, [req.body.Student_full_name, req.body.select_standard, req.body.select_division, req.body.select_medium,req.body.select_exam,req.body.physics,req.body.chemistry,req.body.biology,req.body.english,req.body.marathi,req.body.maths,req.body.total_marks,req.body.status, id], (err, result) => {
        console.log("values:",req.body.Student_full_name, req.body.select_standard, req.body.select_division, req.body.select_medium,req.body.select_exam,req.body.physics,req.body.chemistry,req.body.biology,req.body.english,req.body.marathi,req.body.maths,req.body.total_marks,req.body.status);
        if (err) {
            return res.json({ Message: err.message });
        }
        console.log("result:",result);
        return res.json(result);
    })
})

app.put('/divisions/:id', (req, res) => {
    const sql = 'UPDATE division SET `Standard_Name`=?,`division_name`=?, `class_teacher`=?, `no_of_students`=? WHERE id=?';
    const id = req.params.id;
    db.query(sql, [req.body.Standard_Name,req.body.division_name, req.body.class_teacher, req.body.no_of_students, id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.put('/teachers/:id', (req, res) => {
    const sql = 'UPDATE teacher SET `first_name`=?, `gender`=?, `qualification`=? WHERE id=?';
    const id = req.params.id;
    db.query(sql, [req.body.first_name, req.body.gender, req.body.qualification, id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.put('/results/:id', (req, res) => {
    const sql = 'UPDATE results SET `student_unq_no`=?, `year`=?, `marks`=?, `status`=? WHERE id=?';
    const id = req.params.id;
    db.query(sql, [req.body.student_unq_no, req.body.year, req.body.marks, req.body.status, id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/students/:id', (req, res) => {
    const sql = "DELETE FROM test WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/events/:id', (req, res) => {
    const sql = "DELETE FROM events WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/teachers/:id', (req, res) => {
    const sql = "DELETE FROM teacher WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})


app.delete('/deleteresults/:id', (req, res) => {
    const sql = "DELETE FROM results WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})


app.delete('/standards/:id', (req, res) => {
    const sql = "DELETE FROM standards WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/divisions/:id', (req, res) => {
    const sql = "DELETE FROM division WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/teachers/:id', (req, res) => {
    const sql = "DELETE FROM teacher WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.delete('/events/:id', (req, res) => {
    const sql = "DELETE FROM events WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})


app.delete('/results/:id', (req, res) => {
    const sql = "DELETE FROM results WHERE id = ?";
    //grab the id using req.params.id
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(result);
    })
})

app.post('/createstudent', (req, res) => {
    const sql = "INSERT INTO test (`Profile_Picture`,`First_Name`,`Middle_Name`, `Last_Name`, `Place_of_Birth`, `DOB`,`PlaceOf_Birth`, `Blood_Group`, `Gender`, `Cast`, `Nationality`,`Religion`, `Parent_Name`,`Occupation`,`Annual_salary`,`Current_Address`,`Current_Address_City`,`Current_Address_District`,`Current_Address_State`,`Current_Address_Pin_Code`,`Permanant_Address`,`Permanant_Address_City`,`Permanant_Address_District`,`Permanant_Address_State`,`Permanant_Address_Pincode`,`Last_School_Attended`,`Year_Of_Passing`,`Aadhar_Card`,`Birth_Certificate`) VALUES (?)";
    console.log(req.body, "----->>>")
    console.log(req.files, "files")
    const values = [
        req.body.Profile_Picture,
        req.body.First_Name,
        req.body.Middle_Name,
        req.body.Last_Name,
        req.body.DOB,
        req.body.PlaceOf_Birth,
        req.body.Blood_Group,
        req.body.Gender,
        req.body.Cast,
        req.body.Nationality,
        req.body.Religion,
        req.body.Parent_Name,
        req.body.Occupation,
        req.body.Annual_salary,
        req.body.Current_Address,
        req.body.Current_Address_City,
        req.body.Current_Address_District,
        req.body.Current_Address_State,
        req.body.Current_Address_Pin_Code,
        req.body.Permanant_Address,
        req.body.Permanant_Address_City,
        req.body.Permanant_Address_District,
        req.body.Permanant_Address_State,
        req.body.Permanant_Address_Pincode,
        req.body.Last_School_Attended,
        req.body.Year_Of_Passing,
        req.body.Birth_Certificate

    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

// upload//////////////////////////////////////////

// app.post('/uploadfile', upload.single('image'), upload.fields([
//     { name: 'Profile_Picture', maxCount: 1 },
//     { name: 'Aadhar_Card', maxCount: 1 },
//     { name: 'Birth_Certificate', maxCount: 1 },
// ]), (req, res) => {

//     //const profilePicturePath = req.files['Profile_Picture'][0];
//     const aadharCardPath = req.files['Aadhar_Card'][0].path;
//     const birthCertificatePath = req.files['Birth_Certificate'][0].path;


//     const profilePicturePath = path.join(__dirname, 'uploads', req.file.filename);
//     console.log("objectprofile:",profilePicturePath )

//   // Respond with the URL of the uploaded image
//  // const profilePicturePath = `http://localhost:${PORT}/uploads/${req.file.filename}`;

//     // Read file contents
//     // const profilePictureBuffer = fs.readFileSync(profilePicturePath);
//     // const aadharCardBuffer = fs.readFileSync(aadharCardPath);
//     // const birthCertificateBuffer = fs.readFileSync(birthCertificatePath);

//     // Access other form data
//     // Prepare values array

//     // Access other form data
//     const values = [
//         req.body.profilePicturePath,
//         req.body.First_Name,
//         req.body.Middle_Name,
//         req.body.Last_Name,
//         req.body.DOB,
//         req.body.PlaceOf_Birth,
//         req.body.Blood_Group,
//         req.body.Gender,
//         req.body.Cast,
//         req.body.Nationality,
//         req.body.Religion,
//         req.body.Parent_Name,
//         req.body.Occupation,
//         req.body.Annual_salary,
//         req.body.Current_Address,
//         req.body.Current_Address_City,
//         req.body.Current_Address_District,
//         req.body.Current_Address_State,
//         req.body.Current_Address_Pin_Code,
//         req.body.Permanant_Address,
//         req.body.Permanant_Address_City,
//         req.body.Permanant_Address_District,
//         req.body.Permanant_Address_State,
//         req.body.Permanant_Address_Pincode,
//         req.body.Last_School_Attended,
//         req.body.Year_Of_Passing,
//         req.body.aadharCardPath,
//         req.body.birthCertificatePath

//     ];

//     // Save data to the MySQL database
//     const sql = 'INSERT INTO test (`Profile_Picture`,`First_Name`,`Middle_Name`,`Last_Name`,`DOB`,`Place_of_Birth`,`Blood_Group`,`Gender`,`Cast`,`Nationality`,`Religion`,`Parent_Name`,`Occupation`,`Annual_salary`,`Current_Address`,`Current_Address_City`,`Current_Address_District`,`Current_Address_State`,`Current_Address_Pin_Code`,`Permanant_Address`,`Permanant_Address_City`,`Permanant_Address_District`,`Permanant_Address_State`,`Permanant_Address_Pincode`,`Last_School_Attended`,`Year_Of_Passing`,`Aadhar_Card`,`Birth_Certificate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

//     const valuesCount = values.length;
//     console.log('Number of elements in the values array:', valuesCount);
//     console.log('Values:', values);
//     console.log('SQL Query:', sql);
//     db.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.error('Error saving data to MySQL:', error);
//             res.status(500).json({ error: 'Internal Server Error', details: error.message });
//         } else {
//             console.log('Data saved to MySQL successfully:', results);
//             res.json({ message: 'Data received and saved successfully' });
//         }
//     }
//     );

// });

app.post('/uploadfile', upload.fields([
    { name: 'Profile_Picture', maxCount: 1 },
    { name: 'Aadhar_Card', maxCount: 1 },
    { name: 'Birth_Certificate', maxCount: 1 },
]), (req, res) => {

    const profilePicturePath = req.files['Profile_Picture'][0].originalname;
    const aadharCardPath = req.files['Aadhar_Card'][0].originalname;
    const birthCertificatePath = req.files['Birth_Certificate'][0].originalname;


    console.log("profilepicture:", profilePicturePath);


    const profilePicturePath1 = `http://localhost:4008/uploads/${profilePicturePath}`;
    const aadharCardPath1 = `http://localhost:4008/uploads/${aadharCardPath}`;
    const birthCertificatePath1 = `http://localhost:4008/uploads/${birthCertificatePath}`;
    console.log("path1:", profilePicturePath1);
    // Respond with the URL of the uploaded image
    // const profilePicturePath = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    // Read file contents
    // const profilePictureBuffer = fs.readFileSync(profilePicturePath);
    // const aadharCardBuffer = fs.readFileSync(aadharCardPath);
    // const birthCertificateBuffer = fs.readFileSync(birthCertificatePath);

    // Access other form data
    // Prepare values array


    // Access other form data
    const values = [
        profilePicturePath1,
        req.body.First_Name,
        req.body.Middle_Name,
        req.body.Last_Name,
        req.body.DOB,
        req.body.PlaceOf_Birth,
        req.body.Blood_Group,
        req.body.Gender,
        req.body.Cast,
        req.body.Nationality,
        req.body.Religion,
        req.body.student_contact_no,
        req.body.student_email_address,
        req.body.Parent_Name,
        req.body.Occupation,
        req.body.Annual_salary,
        req.body.parent_contact_no,
        req.body.parent_email_address,
        req.body.Current_Address,
        req.body.Current_Address_City,
        req.body.Current_Address_District,
        req.body.Current_Address_State,
        req.body.Current_Address_Pin_Code,
        req.body.Permanant_Address,
        req.body.Permanant_Address_City,
        req.body.Permanant_Address_District,
        req.body.Permanant_Address_State,
        req.body.Permanant_Address_Pincode,
        req.body.Last_School_Attended,
        req.body.Year_Of_Passing,
        aadharCardPath1,
        birthCertificatePath1

    ];

    // Save data to the MySQL database
    const sql = 'INSERT INTO test (`Profile_Picture`,`First_Name`,`Middle_Name`,`Last_Name`,`DOB`,`Place_of_Birth`,`Blood_Group`,`Gender`,`Cast`,`Nationality`,`Religion`,`student_contact_no`,`student_email_address`,`Parent_Name`,`Occupation`,`Annual_salary`,`parent_contact_no`,`parent_email_address`,`Current_Address`,`Current_Address_City`,`Current_Address_District`,`Current_Address_State`,`Current_Address_Pin_Code`,`Permanant_Address`,`Permanant_Address_City`,`Permanant_Address_District`,`Permanant_Address_State`,`Permanant_Address_Pincode`,`Last_School_Attended`,`Year_Of_Passing`,`Aadhar_Card`,`Birth_Certificate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const valuesCount = values.length;
    console.log('Number of elements in the values array:', valuesCount);
    console.log('Values:', values);
    console.log('SQL Query:', sql);
    db.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error saving data to MySQL:', error);
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        } else {
            console.log('Data saved to MySQL successfully:', results);
            res.json({ message: 'Data received and saved successfully' });
        }
    }
    );

});


// upload//////////////////////////////////////////

app.post('/uploadevent', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
]), (req, res) => {

    const image1Path = req.files['image1'][0].originalname;
    const image2Path = req.files['image2'][0].originalname;
    const image3Path = req.files['image3'][0].originalname;

    const image1Path1 = `http://localhost:4008/uploads/${image1Path}`;
    const image2Path1 = `http://localhost:4008/uploads/${image2Path}`;
    const image3Path1 = `http://localhost:4008/uploads/${image3Path}`;

    // Respond with the URL of the uploaded image
    // const profilePicturePath = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    // Read file contents
    // const profilePictureBuffer = fs.readFileSync(profilePicturePath);
    // const aadharCardBuffer = fs.readFileSync(aadharCardPath);
    // const birthCertificateBuffer = fs.readFileSync(birthCertificatePath);

    // Access other form data
    // Prepare values array


    // Access other form data
    const values = [
        req.body.eventTitle,
        req.body.eventDescription,
        req.body.eventCategory,
        req.body.eventDateTime,
        req.body.eventDuration,
        req.body.venue,
        image1Path1,
        image2Path1,
        image3Path1

    ];

    // Save data to the MySQL database
    const sql = 'INSERT INTO events (`eventTitle`,`eventDescription`,`eventCategory`,`eventDateTime`,`eventDuration`,`venue`,`image1`,`image2`,`image3`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const valuesCount = values.length;
    console.log('Number of elements in the values array:', valuesCount);
    console.log('Values:', values);
    console.log('SQL Query:', sql);
    db.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error saving data to MySQL:', error);
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        } else {
            console.log('Data saved to MySQL successfully:', results);
            res.json({ message: 'Data received and saved successfully' });
        }
    }
    );

});


//upload teacher ///////////////////////////////////

app.post('/uploadTeacherfile', upload.fields([
    { name: 'Profile_Picture', maxCount: 1 },
    { name: 'id_Proof', maxCount: 1 }
]), (req, res) => {

    const profilePicturePath = req.files['Profile_Picture'][0].originalname;
    const id_ProofPath = req.files['id_Proof'][0].originalname;


    console.log("profilepicture:", profilePicturePath);


    const profilePicturePath1 = `http://localhost:4008/uploads/${profilePicturePath}`;
    const id_ProofPath1 = `http://localhost:4008/uploads/${id_ProofPath}`;
    console.log("path1:", profilePicturePath1);
    // Respond with the URL of the uploaded image
    // const profilePicturePath = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    // Read file contents
    // const profilePictureBuffer = fs.readFileSync(profilePicturePath);
    // const aadharCardBuffer = fs.readFileSync(aadharCardPath);
    // const birthCertificateBuffer = fs.readFileSync(birthCertificatePath);

    // Access other form data
    // Prepare values array


    // Access other form data
    const values = [
        profilePicturePath1,
        req.body.First_Name,
        req.body.Last_Name,
        req.body.DOB,
        req.body.Gender,
        req.body.Address,
        req.body.Contact_number,
        req.body.Email,
        req.body.Qualification,
        req.body.Specialization,
        req.body.Experience,
        req.body.Joining_Date,
        id_ProofPath1, // Assuming id_Proof is a string or file path
        req.body.Position_of_joining

    ];

    // Save data to the MySQL database
    const sql = 'INSERT INTO teacher (`Profile_Picture`,`First_Name`,`Last_Name`,`DOB`,`Gender`,`Address`,`Contact_number`,`Email`,`Qualification`,`Specialization`,`Experience`,`Joining_Date`,`id_Proof`,`Position_of_joining`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const valuesCount = values.length;
    console.log('Number of elements in the values array:', valuesCount);
    console.log('Values:', values);
    console.log('SQL Query:', sql);
    db.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error saving data to MySQL:', error);
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        } else {
            console.log('Data saved to MySQL successfully:', results);
            res.json({ message: 'Data received and saved successfully' });
        }
    }
    );

});

//upload teacher///////////////////////////////////




app.post('/addresults', (req, res) => {
    const sql = "INSERT INTO results (`Student_full_name`,`select_standard`, `select_division`,`select_medium`,`select_exam`,`physics`,`chemistry`,`biology`,`english`,`marathi`,`maths`,`total_marks`,`status`) VALUES (?)";
    console.log(req.body.values, "----->>>")
    const values = [
        req.body.Student_full_name,
        req.body.select_standard,
        req.body.select_division,
        req.body.select_medium,
        req.body.select_exam,req.body.physics,req.body.chemistry,req.body.biology,req.body.english,req.body.marathi,req.body.maths,req.body.total_marks,
        req.body.status
    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

//chart queries API

app.get('/genderCounts', (req, res) => {
    const query = `
      SELECT
        COUNT(CASE WHEN gender = 'male' THEN 1 END) AS total_female,
        COUNT(CASE WHEN gender = 'female' THEN 1 END) AS total_male
      FROM
        test;
    `;

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const genderData = [
                { label: 'male', value: results[0].total_female },
                { label: 'female', value: results[0].total_male },
            ];
            res.json(genderData);
        }
    });
});

app.get('/passsfailcounts', (req, res) => {
    const query = `
      SELECT
        SUM(CASE WHEN status = 'pass' THEN 1 ELSE 0 END) as pass_students,
        SUM(CASE WHEN status = 'fail' THEN 1 ELSE 0 END) as fail_students
      FROM
        results;
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const statusData = [
            { label: 'Pass', value: result[0].pass_students },
            { label: 'Fail', value: result[0].fail_students },
        ];
        res.json(statusData);
    });
});


//chart queries API

//total count of card API

app.get('/countstudents', (req, res) => {
    const query = 'SELECT COUNT(*) AS total_students  FROM test';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Students Count Query Result:', results);
            // Return the count directly, not encapsulated in an object
            res.json(results[0].total_students);
        }
    });
});


app.get('/countstandards', (req, res) => {
    const query = 'SELECT COUNT(*) AS total_standards FROM standards';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Return the count directly, not encapsulated in an object
            res.json(results[0].total_standards);
        }
    });
});

app.get('/countteachers', (req, res) => {
    const query = 'SELECT COUNT(*) AS total_teachers FROM teacher';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Return the count directly, not encapsulated in an object
            res.json(results[0].total_teachers);
        }
    });
});

app.get('/countresults', (req, res) => {
    const query = 'SELECT COUNT(*) AS total_results FROM results';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Return the count directly, not encapsulated in an object
            res.json(results[0].total_results);
        }
    });
});

app.get('/standards', (req, res) => {
    const sql = "SELECT * FROM 	standards";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.get('/divisions', (req, res) => {
    const sql = "SELECT * FROM 	division";

    // Execute the SQL query
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ Message: "Error in server" });
        }
        return res.json(data);
    });
});

app.post('/addstandards', (req, res) => {
    const sql = "INSERT INTO standards (`Standard_Name`,`Academic_Year`,`medium`,`max_students`) VALUES (?)";
    console.log(req.body.values, "----->>>")
    const values = [
        req.body.Standard_Name,
        req.body.Academic_Year,
        req.body.medium,
        req.body.max_students
    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.post('/adddivisions', (req, res) => {
    const sql = "INSERT INTO division (`Standard_Name`,`division_name`,`class_teacher`,`no_of_students`) VALUES (?)";
    console.log(req.body.values, "----->>>")
    const values = [
        req.body.Standard_Name,
        req.body.division_name,
        req.body.class_teacher,
        req.body.no_of_students
    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});



//total count of card API

app.listen(4008, () => {
    console.log("listening at port no 4008");
})