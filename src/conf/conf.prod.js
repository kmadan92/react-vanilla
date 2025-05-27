const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
  appwriteDbId: String(import.meta.env.VITE_APPWRITE_DBID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKETID),
  tinymceKEY: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default conf;
