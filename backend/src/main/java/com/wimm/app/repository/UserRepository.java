package com.wimm.app.repository;

import com.wimm.app.domain.UserEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer>
{
    Optional<UserEntity> findByUsername(final String username);

    Optional<UserEntity> findByEmail(final String email);

    @Transactional
    @Modifying
    @Query("delete from UserEntity user where user.username = ?1")
    int deleteUser(final String userName);
}
