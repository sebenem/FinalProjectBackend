    import userModel from "../models/userModel.js"
    import { generateToke } from "../utils/generateToke.js"

    const createUser = async (req,res) => {
        const {name, email, password} = req.body
        const user=await userModel.findOne({email})
        if (user) {
            return res.json('user Mövcuddur')
        }
        await userModel.create({
            name: name,
            email: email,
            password: password
        })
        res.json('User Yaradıldı')
    }

    const loginUser= async (req,res) => {
        const {email, password}= req.body
        const user= await userModel.findOne({email})
        if (user && await user.passwordControl(password)) {
            generateToke(res, user._id)
            res.json('Hesaba Girish Edildi')
            
        } else {
            res.json('Email ve ya Parol Sehvdir')
        }
    }

    const logoutUser= async (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date (0)
        })
        res.json('cixis edildi')
    }

    const getUser = async (req,res) => {
    if (req.user) {
        res.json({
                name: req.user.name,
                email: req.user.email
            })
    } else {
        res.json('Yoxdur')
    }
    
    }
    const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "İstifadəçi tapılmadı" });
        }

        res.json({ message: "İstifadəçi uğurla silindi" });
    } catch (error) {
        res.status(500).json({ message: "Silinmə zamanı xəta baş verdi", error });
    }
};

// Bütün istifadəçiləri gətir
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, 'name email role isActive'); // lazım olan sahələri seçə bilərsən
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'İstifadəçiləri gətirərkən xəta', error });
  }
};
    export {createUser, loginUser, logoutUser, getUser, deleteUser, getAllUsers}