import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body

    //TODO: create playlist
    if((!name || name?.trim()==="") || (!description || description?.trim()==="")){
        throw new ApiError(400, "Name and description are required")
    }
    // create palylist
    const playlist = await Playlist.create({
        name,
        description,
        owner: req.user._id
    })
    if(!playlist){
        throw new ApiError(500, "Failed to create playlist")
    }
    return res
    .status(201)
    .json(new ApiResponse(200, {playlist}, "Playlist created successfully"))
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists
    if(!isValidObjectId(userId)){
        throw new ApiError(400, "Invalid user id")
    }
    // find user in monogdb
    const user = await User.findById(userId)
    if(!user){
        throw new ApiError(404, "User not found")
    }
    // get user playlists
    const playlists = await Playlist.aggregate([
        {
            $match: {
                owner: mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "_id",
                foreignField: "playlist",
                as: "videos",
            }
        },
        {
            $addFields:{
                playlist:{
                    $first:"$videos"
                }
            }
        }
    ])
    if(!playlists){
        throw new ApiError(404, "No playlist found")
    }
    return res
    .status(200)
    .json(new ApiResponse(200, {playlists}, "User playlists fetched successfully")) 
}) 


const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    //TODO: get playlist by id
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist

})

const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    const {name, description} = req.body
    //TODO: update playlist
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}