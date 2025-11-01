// components/BlogCard.js
'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card overflow-hidden group cursor-pointer"
    >
      <Link href={`/blogs/${post.slug}`}>
        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-primary-700 font-semibold group-hover:text-primary-800 transition-colors">
              Read More
            </span>
            <ArrowRight 
              size={16} 
              className="text-primary-700 group-hover:translate-x-1 transition-transform" 
            />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}