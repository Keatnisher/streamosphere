package api

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

var router *gin.Engine

func InitApiHandler() *gin.Engine {
	// default gin router
	router = gin.Default()

	// allow api calls essentially
	router.Use(CORSMiddleware())

	// init api routes and run the server
	initRoutes()
	router.Use(static.Serve("/", static.LocalFile("../frontend/dist", true)))
	router.Run(":8080")

	return router
}

func initRoutes() {

	api := router.Group("/api")
	{
		// ------------------------- FILES -------------------------
		api.GET("/files/:FileID", GetSingleFile)
		api.GET("/users/:UserID/files", GetAllFiles)
		api.GET("/users/:UserID/files/:FileType", GetAllFilesByType)

		api.POST("/users/:UserID/files", UploadFile)

		// Handle PATCH to edit any file attribute(s) (except arrays at the moment)
		api.PATCH("/files/:FileID", UpdateFile)

		// ------------------------- USERS -------------------------
		api.GET("/users", GetUsers)
		api.POST("/user", CreateUser)
		api.GET("/user/:Email", GetUserIdByEmail)

		// ----------------------- FOLDERS -------------------------
		api.GET("/users/:UserID/folders", GetAllFolders)
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
