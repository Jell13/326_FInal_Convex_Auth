
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const storeUser = mutation({
    args:{},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity){
            throw new Error("User is not authenticated")
        }

        const userId = identity.subject
        const name = identity.name
        const email = identity.email

        const user = await ctx.db.query("users").withIndex("by_userId", q => q.eq("userId", userId)).unique()

        if(user !== null){
            return user._id
        }

        const newUser = await ctx.db.insert("users", {
            fullName: name,
            email: email,
            userId: userId
        })
    }
})