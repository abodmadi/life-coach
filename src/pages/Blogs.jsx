import React from 'react'
import BlogCard from '../components/BlogCard';
import { useState,useEffect } from 'react';
import Pagination from '../components/Pagination';
import BlogCardSkeleton from '../components/BlogCardSkeleton';

export default function Blogs() {
    const [isLoading,setIsLoading] = useState(false) 
    const [blogs,setBlogs] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [blogsPerPage,setBlogsPerPage] = useState(10)
    
    useEffect(()=>{
        const fetchBlogs = async ()=>{
            setIsLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
            })
            const responseBody = await response.json()
            setIsLoading(false)
            setBlogs(responseBody)
        }
        fetchBlogs()
    },[])

    // This is showing the blogs pagination:
    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = blogs.slice(indexOfFirstBlog,indexOfLastBlog)

    /*const items=[
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
        {
            id:10,
            title:'How to position your furniture for positivity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
            year:'2008',
            date:'10th Oct',
            link:'https://www.youtube.com/',
        },
    ]*/

    return (
        isLoading
        ? 
            <div className= "p-5 bg-slate-100">
                <BlogCardSkeleton count={10}/>
            </div>
        :
        <div className="flex flex-col justify-center bg-slate-100 ">
            <div className='p-5'>
                {
                    currentBlogs.map((item)=>(
                        <div key={item.id} className="p-5">
                            <BlogCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPNJ0mhCiaWq9yc8zt7zCQqn2pfxGXA7Lz0itzc8XWw&s'} date={'07th Oct 2023'} description={item.body} link={'https://www.youtube.com/'} title={item.title} />
                        </div>
                    ))
                }
            </div>
            <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} currentPage={currentPage} paginate={(newPage)=>setCurrentPage(newPage)}/>
        </div>
    );
}
