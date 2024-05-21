import menu from "../../assets/menu.svg"
import Button from '@mui/material/Button';
import logo from '../../assets/logo.svg'
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import search from '../../assets/search.svg'
import React from 'react';
import Link from '@mui/material/Link';
import bag from "../../assets/bag.svg"
import Avatar from '@mui/material/Avatar';
import profile from "../../assets/profile.png"

function Header() {

    return(
        <div>
            <div className="flex bg-primary px-lg py-md gap-4 justify-between">
                <div className="flex gap-24">
                    <div className="flex">
                        <Button variant="text" startIcon={<img src={menu} />}></Button>
                        <img src={logo} />
                    </div>
                    <Input
                        className="bg-white lg:w-[600px]"
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="end">
                                <img src={search}/>
                            </InputAdornment>
                        }
                    />
                </div>
                <div className="flex justify-center items-center gap-32">
                    <div className="flex gap-16">
                        <Link href="#" color="white" underline="none"> Favoritos </Link>
                        <Link href="#" color="white" underline="none">
                            <div className="flex gap-2"> <img src={bag}/> Sacola </div>
                        </Link>
                    </div>

                    <Avatar alt="Remy Sharp" src={profile} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}

export default Header;