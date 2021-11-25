/** @type {import('next').NextConfig} */
import path from 'path';

export default {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
